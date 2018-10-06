import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from 'botframework-webchat';
import stylec from './botchat.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
           <Chat directLine={{ secret: "G6JlWv_Xh2g.cwA.rpY.IIbwng8gy1SQyxuTFaUuNdkzde9_hojzjrqXMJ1e0MY" }} user={{ id: '' }}
              className = {stylec}

           />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
