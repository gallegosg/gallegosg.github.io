import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: (<div><h1>Gerardo Gallegos</h1>
      <p>Making cool things, eventually</p></div>)
    };
  }
  
  handleClick = (e) => {
    const {id} = e.target
    let page = '';
    switch(id){
      case 'home':
        page = (<div><h1>Gerardo Gallegos</h1>
          <p>Making cool things, eventually</p></div>)
        break;
      case 'contact':
        page = (
          <div>call me at ### but dont call me late for dinner</div>
        )
        break;
      case 'about':
        page = (<div>
          <p>Full time programmer, part time racecar driver (in my mind)</p></div>)
        break;
      default: 
        break;
    }
    this.setState({page})
  }
  render() {
    return (
      <div className='App'>
        <div className="topnav">
          <p onClick={this.handleClick} id={'home'} className="active" >Home</p>
          <p onClick={this.handleClick} id={'contact'}>Contact</p>
          <p onClick={this.handleClick} id={'about'}>About</p>
        </div>
        <div className='center'>
          {/* <h1>Gerardo Gallegos</h1>
          <p>Making cool things, eventually</p> */}
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default App;