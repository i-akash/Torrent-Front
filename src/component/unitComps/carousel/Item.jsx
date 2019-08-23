import React from 'react';

export default class Item extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const {onClick,level,title,src}=this.props;
        const className = 'citem level' +level
        return(
            <div className={className} onClick={onClick}>
                    <img src={src} style={{width:"100%",height:"78%",borderTopLeftRadius:"3%",borderTopRightRadius:"3%"}} alt={title} class="ui image"/>
                    <h4 style={{color:"gray",position:"absolute",zIndex:"100000",bottom:"2px",textAlign:"center",overflow:"hidden"}}>{title}</h4>
            </div>
        )
    }
}