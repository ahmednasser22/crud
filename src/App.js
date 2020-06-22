import React, { Component } from 'react';
import Addname from './components/addName';
import Shownames from './components/showNames';

import './App.css';

class App extends Component {
  state = {
    names: [
      { name: "ahmed" },
      { name: "mohamed" },
      { name: "ali" }
    ],
    current: ''
  }

  //update name
  updateName = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  //add name
  addName = (e) => {
    e.preventDefault();
    if (e.target.input.value) {
      let current = this.state.current;
      let newnames = this.state.names;
      newnames.push({ name: current });

      this.setState({
        names: newnames,
        current: ''
      });

    } else {
      alert("Please enter the name !");
    }
  }

  //delete name
  deleteName = (index) => {
    if(window.confirm("Are you sure ?")){
    let newnames = this.state.names;
    newnames.splice(index, 1);
    this.setState({
      names: newnames
    });
  }
  }

  //edit name
  editName = (index, value) => {
    if(window.confirm("Are you sure ?")){
    let allNames = this.state.names;
    let selectedName = allNames[index];
    (value)  ? selectedName["name"] = value : alert("Please enter valid");
    this.setState({
      names: allNames
    });
  }
  }

  render() {

    const allNames = this.state.names;
    const namelist = (allNames.length) ? allNames.map((nameitem, index) => {
      return <Shownames nameItemFromApp={nameitem} key={index} index={index} deleteName={this.deleteName} editName={this.editName} />
    }) : (<p>No names to show</p>)

    return (
      <div className="App">
        <h2>add names</h2>
        <Addname current={this.state.current} updateName={this.updateName} addName={this.addName} />
        <ul>{namelist}</ul>
      </div>
    );
  }
}

export default App;
