import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../pages/jsx/Home'
import Category from '../pages/jsx/CategoryPage'
import TorrentDetails from '../pages/jsx/TorrentDetail'

export default ()=> {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/details/:id' exact component={TorrentDetails}/>
            <Route path='/:category/:subCategory' exact component={Category}/>
        </Switch>
    )
}
