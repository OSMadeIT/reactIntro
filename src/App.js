import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          title: "Business",
          category: "Web Design"
        },
        {
          title: "E-Commerce",
          category: "Social App"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      My App
      <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
