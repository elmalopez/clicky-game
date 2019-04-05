import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid.js';
// import NavBar from './components/Navbar2.js';



class App extends Component {
  state = {
    count: 0
  };

  handleItemClick = () => this.setState({count: this.state.count + 1 });
  // handleItemClick = () => this.setState((state) => ({count: state.count + 1}));

  render() {
    return (
      <div className="App">
        {/* <NavBar /> */}
        <Grid handleItemClick={this.handleItemClick} />
      </div>
    );
  }
}

export default App;

