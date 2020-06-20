import React, {Component} from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
  state = {
    userName: [
      'Lex Luthor',
      'Superman'
    ]
  };

  userNameHandler = (event) => {
    this.setState({
      userName: [
        event.target.value,
        'Batman'
      ]
    })
  };

  render() {
    return (
      <div className="App">
        {/*currentName is for the 2 way binding to allow the input to be connected to the output*/}
        <UserInput change={this.userNameHandler} currentName={this.state.userName[0]}/>
        <UserOutput userName={this.state.userName[0]}/>
        <UserOutput userName={this.state.userName[1]}/>
      </div>
    );
  }
}

export default App;
