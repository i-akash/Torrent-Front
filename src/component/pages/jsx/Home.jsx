import React, { Component } from 'react'
import '../css/Home.css'
import Carousel from '../../unitComps/carousel/Carousel'

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
                         "https://wallpapercave.com/wp/wp1776719.jpg"]
    }

    render() {
        return (
            <div className="home-container">
                <div className="trendingsection">
                    <Carousel items={this.state.items} active={1}/>
                </div>         
            </div>
        )
    }
}
