/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import expressHandlebars from 'express-handlebars';
import handlebars from 'handlebars';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const basePath = process.cwd();
var config = require(path.join(basePath, '/build/webpack.dev.js'));
import * as Seo from './utils/seo.js';

var paths = {
    distDirectory: path.join(basePath, '/dist/client'),
    defaultHtml: path.join(basePath, '/dist/client/index.hbs')
};

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
let seo = Seo.getSeo();

if (isDeveloping) {
    seo.title += ' - Development Mode';
    const compiler = webpack(config);
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    // app.use(app.static(__dirname + '/images'));
    app.get('*', function response(req, res) {
        middleware.fileSystem.readFile(paths.defaultHtml, 'utf-8', function (err, data) {
            res.write(handlebars.compile(data.toString())({seo: seo}));
            res.end();
        });
    });
} else {
    app.engine('.hbs', expressHandlebars({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.set('views', paths.distDirectory);
    app.use(express.static(paths.distDirectory));
    app.get('*', function response(req, res) {
        res.render('index', {
            seo: seo
        });
    });
}

app.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('====>Listening on port %s. Open up http://0.0.0.0:%s/ in your browser. Development Mode: %s', port, port, isDeveloping);
});