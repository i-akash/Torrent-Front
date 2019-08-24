import React, { Component } from 'react'
import Table from '../list/Table'

export default class TorrentListing extends Component {
    state={
        torrents:[],
        page:1,
        posterX:'',
        posterY:'',
        posterIndex:0,
        command:"",
    }

    componentWillUpdate=(props)=>{ 
        if(props.torrents!==this.props.torrents){
            this.setState({torrents:props.torrents})
            if(this.state.command=="next")this.updatePage(1)
            else if(this.state.command=="prev")this.updatePage(-1)
        }
    }

    componentDidMount=()=>{
        const {torrents}=this.props
        this.setState({torrents})
    }

    onHover=(index)=>{
        const {torrents}=this.state
        let torrentsCopy=torrents.slice()
        torrentsCopy[index].hover=!torrentsCopy[index].hover

        this.setState({recentTorrents:torrentsCopy})
    }

    onMouseMove=(e,index)=>{
        this.setState({posterX:e.screenX, posterY:e.screenY,posterIndex:index})
    }

    nextPage=()=>{
        const {page}=this.state;
        if(this.props.morePage){
            this.props.getPage(page+1)
            this.setState({command:"next"})
        }
    }

    prevPage=()=>{
        const {page}=this.state;
        if(page-1>=1){
            this.props.getPage(page-1)
            this.setState({command:"prev"})
        }    
    }

    updatePage=(page)=>{
        this.setState({page:this.state.page+page})
    }

    onClickDetails=(id)=>{
        this.props.history.push(`/details/${id}`)
    }

    render() {
        const {category,morePage}=this.props
        const {torrents,page,posterIndex,posterX,posterY}=this.state;
        return (
                <div className="torrents-list">
                    <h3>{category}</h3>
                    <div>
                    {
                        posterIndex < torrents.length && torrents[posterIndex].hover && 
                        <img src={torrents[posterIndex].poster} style={{position:"absolute",left:`${posterX+20}px`,top:`${posterY}px`}}/>
                    }
                    </div> 
                    <Table list={torrents} onHover={this.onHover} onMouseMove={this.onMouseMove} onDetails={this.onClickDetails}/>
                    <div class="ui pagination right floated menu">
                        {page>1 && <a class="icon item" onClick={this.prevPage}><i aria-hidden="true" class="chevron left icon"></i></a>}
                        <a class="item">{page}</a>
                        {morePage && <a class="icon item" onClick={this.nextPage}><i aria-hidden="true" class="chevron right icon"></i></a>}
                    </div>
                </div>
        )
    }
}
