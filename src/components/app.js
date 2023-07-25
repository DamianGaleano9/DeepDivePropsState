import React, { Component } from 'react';
import JournalList from "./journal/journal_list";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>React, Props, and State Deep Dive</h1>
        <h2><JournalList/></h2>
      </div>
    );
  }
}