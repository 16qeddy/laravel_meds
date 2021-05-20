import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       options: [],
       firstTen: []
    }
    this.getNames();
  }

  //makes an axios get request to obtain the names of medications
  getNames = () => {
    axios.get('/names')
    .then((res)=>{this.setState({
      options: res.data,
      firstTen: res.data
    })})
  }

  //filters out names of medication that don't contain the query string.
  onInputChange = (e, val) => {
    this.setState({
      firstTen: this.state.options.filter(name=>name.includes(val))
    })
  }

  render() {
    return (
      <Autocomplete
        size="small"
        loading={this.state.options===[]}
        onInputChange={this.onInputChange}
        id="combo-box-demo"
        options= {this.state.firstTen.slice(0, 10)} //limits shown options to reduce load times 
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Medication" variant="outlined" />}
      />
    )
  }
}

