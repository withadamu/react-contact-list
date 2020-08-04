import React, { Component } from 'react';
import { CardList } from "./Components/card-list/card-list.component.js";
import { SearchBox } from './Components/searchbox/searchbox.component.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className="App">
        <div className="app-header">
        <h1>Contact List</h1>
        <SearchBox
          placeholder='search contact ......'
          handleChange={this.handleChange}
        />
        </div>
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
