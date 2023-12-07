import React from "react";

function Course(props){
    return (
      <div className="div">
        <h2>CourseName:{props.courseName}</h2>
        <h3>CourseTrainer:{props.trainer}</h3>
        <h3>CourseCost:Rs.{props.cost}</h3>
      </div>
    )
  }
  function CourseList(){
    var courses = [
      {
        cname:'PHP',
        trainer:'Ramesh',
        cost:20000
      },
      {
        cname:'CCNA',
        trainer:'Jayaram',
        cost:40000
      },
      {
        cname:'C++',
        trainer:'Kavya',
        cost:20000
      },
      {
        cname:'Java',
        trainer:'Venkat',
        cost:30000
      },
    ]
    return(
      <div className="div">
        {
          courses.map((c)=>{
            return(
              <Course courseName={c.cname} trainer={c.trainer} cost={c.cost}></Course>
            )
          })
        }
      </div>
    )
  }
export default CourseList ;