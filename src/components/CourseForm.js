import React from 'react'


 const courseForm = (props) => {
    return (
          <form onSubmit={props.addCourse}>
              <input type="text" value={props.current} required='value' onChange={props.updateCourse}></input>
              <button type="submit">ADD COURSE</button>
          </form>  
    )
    
}


export default courseForm;