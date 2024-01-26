import React from "react"
import "./about.css"
import Back from "../common/back/Back"
import { Link } from "react-router-dom"
import AboutCard from "./AboutCard"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const About = () => {
  return (
    <>
      <Back title='About Us' />
      <AboutCard />
    </>
  )
}

export default withRouter(About)
