import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.js';
import MedList from './MedList.js';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            medicationData: []
        }
    }
    
    searchOptionsOnClick = (e, val) =>{
        if(val){
            axios.get(`/details/${val}`)
            .then((data)=>{
                console.log(data.data);
                this.setState({
                    medicationData: data.data
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <SearchBar searchOptionsOnClick={this.searchOptionsOnClick}/>
                {this.state.medicationData.conceptGroup?.map((item, index)=>{
                    return <MedList data={item} key={index}/>
                })}
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
