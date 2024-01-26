import React from "react"
import Back from "../common/back/Back"
import { Link } from "react-router-dom"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default withRouter(Pricing)
