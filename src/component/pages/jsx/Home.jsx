import React, { Component } from 'react'
import '../css/Home.css'
import Carousel from '../../unitComps/carousel/Carousel'
import api from '../../api/Api'
import Table from '../../unitComps/list/Table'
import TorrentListing from '../../unitComps/common/TorrentListing'

export default class Home extends Component {
    state={
        items : ["https://i.pinimg.com/originals/ea/c0/d7/eac0d7572152c14a0f1d34b1770b98bf.jpg",
                 "https://images7.alphacoders.com/600/600892.jpg",
                  "https://images8.alphacoders.com/600/600889.jpg",
                   "https://images3.alphacoders.com/614/614836.jpg",
                    "https://images3.alphacoders.com/828/828850.jpg",
                     "https://images7.alphacoders.com/513/513935.jpg",
                      "https://images6.alphacoders.com/553/553030.jpg",
                       "https://images3.alphacoders.com/647/647230.jpg",
                        "https://images5.alphacoders.com/647/647388.jpg",
                         "https://wallpapercave.com/wp/wp1776719.jpg"],
        trendingTorrents:[],
        recentTorrents:[],
        morePage:true,
    }

    componentWillMount=()=>{
        api.getMinimalTrendingTorrents(1,15).then(trending=>this.setState({trendingTorrents:trending}));
        api.getRecentTorrents(1,20).then(recent=>this.setState({recentTorrents:recent}));
    }

    
    

    getPage=(page)=>{
            api.getRecentTorrents(page,20).then(recent=>{
                if(recent.length)
                    this.setState({recentTorrents:recent,morePage:true})
                else
                    this.setState({morePage:false})    
            });
    }

    render() {
        const {trendingTorrents,recentTorrents,morePage}=this.state;
        return (
            <div className="home-container">
                <div className="trendingsection">
                    <Carousel items={trendingTorrents} active={1} history={this.props.history}/>
                </div>
                
                <div className="fresh-torrents">
                    <TorrentListing torrents={recentTorrents} category={"new Torrents"} getPage={this.getPage} morePage={morePage} history={this.props.history}/>
                </div>
                        
            </div>
        )
    }
}
