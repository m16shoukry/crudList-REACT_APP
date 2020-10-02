import React, { Component } from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';



class App extends Component {
  state= {
    courses: [
      {name: "html"},
      {name: "css"},
      {name: "Js"},
    ],
    current: ''
  }

  
  //update
  updateCourse = (e)=>{
    this.setState({
      current: e.target.value
    })
  }


  //create
  addCourse = (e) => {
    e.preventDefault()
    let current = this.state.current
    let courses = this.state.courses
    courses.push({name: current})
    this.setState({
      courses,
      current: ''
    })
  }


  //read
  editCourse = (index, value) => {
    let courses = this.state.courses
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })
  }

  //delete
  deleteCourse = (index) => {
    let courses = this.state.courses
    courses.splice(index, 1)
    this.setState({courses})
  }


  render() {
    const {courses} = this.state

    const item = this.state.courses.length()

    const courseList = item ? (
      courses.map( (course, index) => {
        return  <CourseList 
        details={course} 
        key={index} 
        index={index} 
        update={this.handleChange} 
        deleteCourse={this.deleteCourse} 
        editCourse={this.editCourse}

        />
      })
    ) 
    : 
    (<p>noitem</p>)
    


    return (
      <section className="App">

        <h2>ADD Course</h2>

        <CourseForm 
          current={this.state.current} 
          updateCourse={this.updateCourse}
          addCourse={this.addCourse} 

        />
    
        <ul>{courseList}</ul>
   
      </section>
    )
  }
}

export default App;
