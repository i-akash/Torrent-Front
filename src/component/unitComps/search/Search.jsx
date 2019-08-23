import React, { Component } from 'react'
import {Search} from 'semantic-ui-react'

export default class Search extends Component {
    state={
        loading:false,
        query:""
    }

    onResultSelect=(e,{result})=>this.props.selectResult(e,{result})
    
    onSearchChange=(e,{value})=>{
        value=value.trim()
        this.setState({ query: value });

        clearTimeout(this.timer);
        this.timer=setTimeout(()=>{
            
                this.setState({isLoading:true})
                this.props.queryChange(value).then(res=>this.setState({isLoading:false}));
            
        },1000);
    }

    render() {
        const {loading,query}=this.state;
        const {options,resultRenderer}=this.props;
        return (
            <Search
                loading={loading}
                value={value}
                results={options}
                resultRenderer={resultRenderer}
                onResultSelect={this.onResultSelect}
                onSearchChange={this.onSearchChange}


            />
        )
    }
}
