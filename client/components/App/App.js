import React from 'react';
import bootstrapStyles from '../../styles/app.scss';
import styles from './App.css';
import "../../../node_modules/font-awesome/scss/font-awesome.scss";
import Header from "../header/Header";
import Content from "../content/Content";
import Channels from "../Channels"
import Footer from "../footer/Footer"
// import images from '../../images/';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        console.log("reiniciando");

        this.state = {
            url        : require('../../media/BeinAllsport60secSpa1.mp4'),
            defaultVid : true,
            channelView : true,
            toggleChannels : true,
            videos : [
                {id:1,  name: 'video1',  url: require('../../media/Caracol Reel Internacional 2016-1.mp4')},
                {id:2,  name: 'video2',  url: require('../../media/BeinAllsport60secSpa1.mp4')},
                {id:3,  name: 'video3',  url: require('../../media/Hola Tv Canal 2016-1.mp4')},
                {id:4,  name: 'video4',  url: require('../../media/Tvchile-1.mp4')},
                {id:5,  name: 'video5',  url: require('../../media/Reel Ecuavisa Internacional Correc Subtitulado-1.mp4')},
                {id:6,  name: 'video6',  url: require('../../media/Señal Intl Telefe - Trailer Institucional-1.mp4')},
                {id:7,  name: 'video7',  url: require('../../media/Tvchile-1.mp4')},
                {id:8,  name: 'video8',  url: require('../../media/Caracol Reel Internacional 2016-1.mp4')},
                {id:9,  name: 'video9',  url: require('../../media/BeinAllsport60secSpa1.mp4')},
                {id:10,  name: 'video10',  url: require('../../media/Hola Tv Canal 2016-1.mp4')},
                {id:11,  name: 'video11',  url: require('../../media/Tvchile-1.mp4')},
                {id:12,  name: 'video12',  url: require('../../media/Reel Ecuavisa Internacional Correc Subtitulado-1.mp4')},
                {id:13,  name: 'video13',  url: require('../../media/Señal Intl Telefe - Trailer Institucional-1.mp4')},
                {id:14,  name: 'video14',  url: require('../../media/Tvchile-1.mp4')},
                {id:15,  name: 'video15',  url: require('../../media/Caracol Reel Internacional 2016-1.mp4')},
                {id:16,  name: 'video16',  url: require('../../media/BeinAllsport60secSpa1.mp4')},
                {id:17,  name: 'video17',  url: require('../../media/Tvchile-1.mp4')},
                {id:18,  name: 'video18',  url: require('../../media/Caracol Reel Internacional 2016-1.mp4')},
                {id:19,  name: 'video19',  url: require('../../media/BeinAllsport60secSpa1.mp4')},
                {id:20,  name: 'video20',  url: require('../../media/Señal Intl Telefe - Trailer Institucional-1.mp4')},
            ],
            article : null, 
            articles : 
            [
              {
                id          : 1,
                name        : 'bein',
                logo        : require('../../images/beinlogo_300.jpg'),
                description : {
                  overalDesc   : 'Bein Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 2,
                name        : 'surPeru',
                logo        : require('../../images/logo_surperu.jpg'),
                description : {
                  overalDesc   : 'Sur Peru Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 3,
                name        : 'cineLatino',
                logo        : require('../../images/cine-latino.jpg'),
                description : {
                  overalDesc   : 'Cine Latino Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 4,
                name        : 'canalSur',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Canal Sur Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 5,
                name        : 'pasiones',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Pasiones Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 6,
                name        : 'vme',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'VME Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 7,
                name        : 'catv',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'CATV Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 8,
                name        : 'nuestraTele',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Nuestra Tele Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 9,
                name        : 'tvDominicana',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'TV Dominicana Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 10,
                name        : 'caracol',
                logo        : require('../../images/Logo_canal_caracol.jpg'),
                description : {
                  overalDesc   : 'Caracol Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 11,
                name        : 'ecuavisa',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Ecuavisa Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 12,
                name        : 'telefe',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Telefe Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 13,
                name        : 'ntn24',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'NTN24 Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 14,
                name        : 'tysSport',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'TYS Sport Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 15,
                name        : 'tvChile',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'TV Chile Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 16,
                name        : 'holaTv',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Hola TV Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 17,
                name        : 'peruMagico',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Peru Magico Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 18,
                name        : 'multimedios',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Multimedios Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 19,
                name        : 'mexicanal',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : 'Mexicanal Description',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
              {
                id          : 20,
                name        : 'bein',
                logo        : require('../../images/logo_sur.jpg'),
                description : {
                  overalDesc   : '',
                  keyPrograms  : 'KEY PROGRAMS',
                  trafficMT    : 'TRAFFIC MATERIAL INSTRUCTIONS',
                  viewProgGrid : 'VIEW PROGRAMING GRID'
                },
              },
            ] 
        }
    }

    changueVideo(video) {
      this.state.videos.map((v) => {
        if(video == v.name) {
          this.setState({
            url         : v.url,
            defaultVid  : false,
            channelView : false,
            article     : this.state.articles[v.id - 1],
            toggleChannels : !this.state.toggleChannels,
          })
        }
      });
    }

    changeDefaultView() {
      this.setState({
        channelView : false,
        toggleChannels : !this.state.toggleChannels,
      });
    }

    toogleChannels() {
      this.setState ({
        toggleChannels : !this.state.toggleChannels
      });
    }
      
  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Header />
              <Content content={this.props.children} channelsView={this.state.channelView} callbackDefaultView={this.changeDefaultView.bind(this)} article={this.state.article} video={this.state.url} defaultVid={this.state.defaultVid} callbackToggle={this.toogleChannels.bind(this)}  />
            </div>
            <div className="col-md-4">
              <Channels callbackParent={this.changueVideo.bind(this)} channelsView={this.state.channelView} toogleChannel={this.state.toggleChannels}   />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}