import React from "react"
import Back from "../common/back/Back"
import { Link } from "react-router-dom"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default withRouter(Team)
