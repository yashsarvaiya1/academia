import React from "react"
import Back from "../common/back/Back"
import { Link } from "react-router-dom"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default withRouter(CourseHome)
