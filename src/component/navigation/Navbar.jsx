import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div class="ui medium black inverted menu" style={{borderRadius:0}}> 
                <div class="item"><img src="https://react.semantic-ui.com/logo.png" /></div>
                <div class="item">Features</div>
                <div class="item">Testimonials</div>
                <div class="item">Sign-in</div>
            </div>
        )
    }
}
