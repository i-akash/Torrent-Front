import axios from 'axios'

export default {
    getTrendingTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getTrendingTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
    getMinimalTrendingTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getMinimalTrendingTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
    getRecentTorrents:(page,pageSize)=>axios.get(`/api/Torrent/getRecentTorrents?page=${page}&pageSize=${pageSize}`).then(resp=>resp.data),
    getCategoryTorrents:(category,subCategory,page)=>axios.get(`/api/Torrent/getCategoryTorrents?category=${category}&subCategory=${subCategory}&page=${page}`).then(resp=>resp.data),
    getTorrent:(id)=>axios.get(`/api/Torrent/getTorrent?id=${id}`).then(resp=>resp.data),
}