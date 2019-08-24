import React, { Component } from 'react'
import api from '../../api/Api' 

export default class TorrentDetail extends Component {

    state={
        torrent:{},
        loading:"loading"
    }

    componentWillMount=()=>{
        const {id}=this.props.match.params 
        api.getTorrent(id).then(torrent=>this.setState({torrent,loading:""}))
    }

    render() {
        const {loading,torrent}=this.state;
        return (
            <div>
                 <div className={`ui black ${loading} segment`}>
                     <h3>{torrent.title}</h3>
                     <a href={torrent.magnet_url}>Download torrent</a>
                 </div>
            </div>
        )
    }
}
