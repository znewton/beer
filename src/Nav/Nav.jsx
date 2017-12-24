import React, { Component } from 'react';
import './Nav.css';

import greetings from '../greetings.data';

class Nav extends Component {
  constructor() {
    super();
    let firstGreeting = Math.floor(Math.random() * greetings.length);
    this.state = {
      greetingIndex: firstGreeting 
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.nextGreeting();
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="nav">
        <span className="greeting">
          "{greetings[this.state.greetingIndex]}"
        </span>
        <span className="info">
          Select a beer to find out more
        </span>
      </div>
    );
  }
  nextGreeting() {
    let greetingIndex = this.state.greetingIndex;
    greetingIndex += 1;
    greetingIndex %= greetings.length-1;
    this.setState({greetingIndex: greetingIndex});
  }
}

export default Nav;

