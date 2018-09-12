import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {
    let ProjectItems;
    if(this.props.projects){
      // Assign each project item to the ProjectItems variable
      ProjectItems = this.props.projects.map(project => {
        // console.log(project);
        return(
          <ProjectItem key = {project.title} project = {project} />
        );
      });
    }
    return (
      <div className="Projects">
        My Projects 
        {ProjectItems}
      </div>
    );
  }
}

export default Projects;
