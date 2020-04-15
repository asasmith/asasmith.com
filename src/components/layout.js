import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css' 

import Header from './header'

export default function Layout ({ children }) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
            style={{
                margin: `0 auto`,
            }} 
        >
            {children}
        </main>
        {/* <footer
            style={{
                margin: `0 auto 2rem`,
            }} 
        >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </>
  )
}