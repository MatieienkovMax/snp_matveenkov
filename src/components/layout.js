/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"
import FBicon from '.././images/fb.svg'


{/* <script src="//code.jivosite.com/widget/X78Ckc9s2K" async></script> */}



const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Header />
      <div className='fics'>fixet text</div>
      <main>
        { children }
      </main>
      <footer>
        <p>
          Мы в соцсетях:
        </p>
        <a href="https://www.facebook.com/groups/Spinenopain/?ref=bookmarks"  rel="nofollow" >
             <img src={FBicon} />
        </a>
      </footer>
    </>
  )
}

export default Layout
