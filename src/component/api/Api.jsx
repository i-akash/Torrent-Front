import axios from 'axios'

export default {
    getTrendingTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getTrendingTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
    getMinimalTrendingTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getMinimalTrendingTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
    getRecentTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getRecentTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
}