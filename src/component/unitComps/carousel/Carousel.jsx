import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Item from './Item';
import './Carousel.scss' 

export default class Carousel extends Component {
    
       state = {
            active: 1,
            direction: '',
            lastTime:0
        }
    


    componentWillMount=()=>{
        this.timer=setInterval(()=>this.moveRight(),2000);
    }

    componentWillUnmount=()=>{
        clearInterval(this.timer);
    }

    generateItems=()=> {
        const {active}=this.state
        const {items}=this.props
        let carouselItems = []
        let level
       

        for (var i = active - 2; i <= active +2; i++) {
            let index = i
            let length=items.length;

            if (i < 0) {
                index = length + i
            } else if (i >= length) {
                index = i % length
            }

            level = active - i
            if(length)
                carouselItems.push(<Item key={index} id={items[index].id} src={items[index].poster} level={level} title={items[index].title} onClick={()=>this.onClickDetails(items[index].id)}/>)
        }
        
        return carouselItems
    }

    onClickDetails=(id)=>{
        this.props.history.push(`/details/${id}`)
    }
    
    moveLeft=()=> {
        const {items}=this.props
        const {active,lastTime}=this.state

        let now=new Date().getTime();
        if(now-lastTime<1000)return;


        var newActive = active
        newActive--
        this.setState({
            active: newActive < 0 ? items.length - 1 : newActive,
            direction: 'left',
            lastTime:now
        })
    }
    
    moveRight=()=> {
        const {items}=this.props
        const {active,lastTime}=this.state

        let now=new Date().getTime();
        if(now-lastTime<1000)return;

        var newActive = active
        this.setState({
            active: (newActive + 1) % items.length,
            direction: 'right',
            lastTime:now
        })
    }
    
    render() {
        return(
            <div id="carousel" className="noselect">
                
                <div className="arrow arrow-left" onClick={this.moveLeft}><i aria-hidden="true" className="arrow left icon"></i></div>
                <ReactCSSTransitionGroup 
                    transitionName={this.state.direction}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}
                    >
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.moveRight}><i aria-hidden="true" className="arrow right icon"></i></div>
            </div>
        )
    }
}






