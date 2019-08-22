import React from 'react';

export default class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'citem level' + this.props.level
        return(
            <div class={className}>
                <div class="image" style={{width:"100%",height:"100%"}}>
                    <img src={this.props.src} style={{width:"100%",height:"100%",borderRadius:"3%"}}/>
                </div>
            </div>
        )
    }
}