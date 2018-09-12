import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }
// A lifecycle method that fires off everytime the component is re-rendered
  componentDidMount(){
    this.setState({projects: [
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
    ]});
  }

  handleAddProject(project){
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }
  
  render() {
    return (
      <div className="App">
      <AddProject AddProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
