// import React
// const React = require('react'); // require() used only in Node

import React from 'react';  // import used in ES6
import Profile from './Profile';

import './App.css';


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Hello Ironhackers</h1>
        <h3>React Intro</h3>
        <Profile />

        {/* <List /> */}
        {/* 
        
        <div className="ListComponent">
          <h5>This is my List Component</h5>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>

         */}
         
      </div>
    )
  }
}


// export the component
export default App;