import React, { Component } from 'react'
import Dropdown from '../unitComps/dropdown/Dropdown'
import {withRouter} from 'react-router-dom'

class Navbar extends Component {
    state={

    }

    onCatRoute=(path)=>this.props.history.push(path)

    render() {
        return (
            <div>
                <div className="ui medium black inverted menu" style={{borderRadius:0,margin:0}}> 
                    <div className="item" onClick={()=>this.onCatRoute("/")}><img src="https://react.semantic-ui.com/logo.png" /></div>
                    <div className="item" style={{marginLeft:"auto"}}>Sign-in</div>
                    <div className="item"/>
                </div>
                <div className="ui white  menu" style={{borderRadius:0,marginTop:0,marginBottom:"10px",display:"flex",justifyContent:"center"}}> 
                    <Dropdown text="audio" icon="music"  list={["music"]} onClick={this.onCatRoute}/>
                    <Dropdown text="video" icon="video" list={["movie",'show']} onClick={this.onCatRoute}/>
                    <Dropdown text="games" icon="game" list={["pc",'ps4']} onClick={this.onCatRoute}/>
                    <Dropdown text="application" icon="microsoft" list={["pc",'mac']} onClick={this.onCatRoute}/>
                    <Dropdown text="other" icon=""/>
                </div>
            </div>
        )
    }
}

export default withRouter(Navbar);