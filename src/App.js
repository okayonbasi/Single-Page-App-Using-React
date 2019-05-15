import React, { Component } from 'react'
import Navbar from './components/Navbar';

export default class App extends Component {
  render() {
    return (
        <div>
          <h1>Single Page Application</h1>
          <Navbar/>
        </div>
    )
  }
}
