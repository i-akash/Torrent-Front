import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Item from './Item';
import './Carousel.scss' 

export default class Carousel extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: '',
            lastTime:0
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    componentWillMount=()=>{
        this.timer=setInterval(()=>this.moveRight(),2000);
    }

    componentWillUnmount=()=>{
        clearInterval(this.timer);
    }

    generateItems() {
        var items = []
        var level
        console.log(this.state.active)
        for (var i = this.state.active - 2; i <= this.state.active +2; i++) {
            var index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={index} src={this.state.items[index]} level={level} />)
        }
        console.log(items);
        
        return items
    }
    
    moveLeft() {

        let now=new Date().getTime();
        let {lastTime}=this.state;
        if(now-lastTime<1000)return;

        lastTime=now;

        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left',
            lastTime
        })
    }
    
    moveRight() {
        let now=new Date().getTime();
        let {lastTime}=this.state;
        if(now-lastTime<1000)return;

        lastTime=now;
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right',
            lastTime
        })
    }
    
    render() {
        return(
            <div id="carousel" className="noselect">
                
                <div className="arrow arrow-left" onClick={this.leftClick}><i aria-hidden="true" class="arrow left icon"></i></div>
                <ReactCSSTransitionGroup 
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i aria-hidden="true" class="arrow right icon"></i></div>
            </div>
        )
    }
}






