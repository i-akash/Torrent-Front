import React, { Component } from 'react'
import '../css/Home.css'
import api from '../../api/Api'
import TorrentListing from '../../unitComps/common/TorrentListing'

export default class Category extends Component {
    state={
        torrents:[],
        morePage:true,
        category:"",
        subCategory:""
    }

    componentWillMount=()=>{
        const {category,subCategory}=this.props.match.params
        api.getCategoryTorrents(category,subCategory,1).then(recent=>this.setState({torrents:recent,category,subCategory}));
    }

    componentWillUpdate=(nextProps)=>{
        const {category,subCategory}=nextProps.match.params
        if(category!==this.props.match.params.category || subCategory!==this.props.match.params.subCategory){
            api.getCategoryTorrents(category,subCategory,1).then(recent=>this.setState({torrents:recent,category,subCategory}));            
        }
    }
    
    

    getPage=(page)=>{
        const {category,subCategory}=this.state
        api.getCategoryTorrents(category,subCategory,page).then(recent=>{
                if(recent.length)
                    this.setState({torrents:recent,morePage:true});
                else
                    this.setState({morePage:false})    
            });
    }

    render() {
        const {torrents,morePage,category}=this.state;
        return (
            <div className="home-container">
                <div className="fresh-torrents">
                    <TorrentListing torrents={torrents} category={category} getPage={this.getPage} morePage={morePage} history={this.props.history}/>
                </div>         
            </div>
        )
    }
}
