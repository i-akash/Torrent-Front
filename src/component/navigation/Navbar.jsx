import React, { Component } from 'react'
import Dropdown from '../unitComps/dropdown/Dropdown'

export default class Navbar extends Component {
    state={

    }
    render() {
        return (
            <div>
                <div className="ui medium black inverted menu" style={{borderRadius:0,margin:0}}> 
                    <div className="item"><img src="https://react.semantic-ui.com/logo.png" /></div>
                    <div className="item" style={{marginLeft:"auto"}}>Sign-in</div>
                    <div className="item"/>
                </div>
                <div className="ui white  menu" style={{borderRadius:0,marginTop:0,marginBottom:"10px",display:"flex",justifyContent:"center"}}> 
                    <Dropdown text="audio" icon="music"/>
                    <Dropdown text="video" icon="video"/>
                    <Dropdown text="games" icon="game"/>
                    <Dropdown text="application" icon="microsoft"/>
                    <Dropdown text="other" icon=""/>
                </div>
            </div>
        )
    }
}
