import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import uuid from 'uuid';

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
        id: uuid.v4(),
        title: "Business",
        category: "Web Design"
      },
      {
        id: uuid.v4(),
        title: "E-Commerce",
        category: "Social App"
      },
      {
        id: uuid.v4(),
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

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});

  }
  
  render() {
    return (
      <div className="App">
      <AddProject AddProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
