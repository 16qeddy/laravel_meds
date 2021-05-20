import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar.js';
import MedList from './MedList.js';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            medicationData: [],
            medicationName: ''
        }
    }
    
    searchOptionsOnClick = (e, val) =>{
        if(val){
            axios.get(`/details/${val}`)
            .then((data)=>{
                console.log(data.data);
                this.setState({
                    medicationData: data.data,
                    medicationName: data.data.name
                })
            })
        }
    }

    render() {
        return (
            <div className="container">
                <SearchBar searchOptionsOnClick={this.searchOptionsOnClick}/>
                <Typography variant="h2" component="h2">{this.state.medicationName}</Typography>
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
