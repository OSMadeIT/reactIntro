import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        this.props.onDelete(id);
    }

  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b> : <code>{this.props.project.category}</code><a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>[X]</a>
      </li>
    );
  }
}

export default ProjectItem;
