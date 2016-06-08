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

        this.state = {
            url        : require('../../media/BeinAllsport60secSpa1.mp4'),
            defaultVid : true,
            channelView : true,
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
        }
    }

    changueVideo(video) {
      this.state.videos.map((v) => {
        if(video == v.name) {
          console.log("seteando ..")
          this.setState({
            url         : v.url,
            defaultVid  : false,
            channelView : false,
          })
        }
      });
    }
      
  render() {

    return (
      <div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Header />
              <Content content={this.props.children} video={this.state.url} defaultVid={this.state.defaultVid}  />
            </div>
            <div className="col-md-4">
              <Channels callbackParent={this.changueVideo.bind(this)} channelsView={this.state.channelView} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}