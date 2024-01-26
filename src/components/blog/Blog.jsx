import React from "react"
import Back from "../common/back/Back"
import { Link } from "react-router-dom"
import BlogCard from "./BlogCard"
import "./blog.css"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const Blog = () => {
  return (
    <>
      <Back title='Blog Posts' />
      <section className='blog padding'>
        <div className='container grid2'>
          <BlogCard />
        </div>
      </section>
    </>
  )
}

export default withRouter(Blog)
