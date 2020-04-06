/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"
import FBicon from '.././images/fb.svg'


const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <main>
        { children }
      </main>
      <footer>
        <p>
          Мы в соцсетях:
        </p>
        <a href="https://www.facebook.com/groups/Spinenopain/?ref=bookmarks" >
             <img src={FBicon} />
          </a>
      </footer>
    </>
  )
}

export default Layout
