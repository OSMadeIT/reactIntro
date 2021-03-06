import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {

    constructor(){
        super();
        this.state = {
            newProject: {

            }
        }
    }

    static defaultProps ={
        categories: ['Business', 'E-Commerce', 'Social App']
    }

    handleSubmit(e){
        if(this.refs.title.value === ''){
            alert('Title must be provided');
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                // console.log(this.state);
                this.props.AddProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key ={category} value={category}>{category}</option> });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title</label>
                <input type="text" ref="title" />
            </div>
            <div>
                <label>Category</label>
                <select ref="category">
                    {categoryOptions}
                </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
