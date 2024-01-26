import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import { Link } from "react-router-dom"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default withRouter(Home)
