import React, { Component, Fragment } from 'react';

class courseList extends Component {

  state = {
      isEdit: false,
      
  }
  
  renderCourse = () => {
      return (
          <ul>
              <span>{this.props.details.name}</span>
              <button onClick={() => {this.toggleState()}} >EDIT COURSE</button>
              <button onClick={() => {this.props.deleteCourse(this.props.index)}} >DELETE COURSE</button>
          </ul>
      )
  }
  

  toggleState = () => {
      let {isEdit} = this.state
      this.setState({
          isEdit: !isEdit
      })
  }
  

  updateCourseItem = (e) => {
      e.preventDefault();
      this.props.editCourse(this.props.index, this.input.value)
      this.toggleState();
  } 


  renderUpdateForm = () => {
      return (
          <form onSubmit={this.updateCourseItem}>
              <input 
              type='text' 
              ref={(v) => { this.input = v}} 
              defaultValue={this.props.details.name}/>

              <button>UPDATE COURSE</button>
          </form>
      )
  }
  
 
   

    render() {
        let {isEdit} = this.state.isEdit
        return (
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse() }
            </Fragment>
            

        )
    }
}


export default courseList;