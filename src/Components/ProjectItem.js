import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <b>{this.props.project.title}</b> : <code>{this.props.project.category}</code>
      </li>
    );
  }
}

export default ProjectItem;
