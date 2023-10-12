import { Link } from 'gatsby'
import React from 'react'

export default function Header ({ siteTitle }) {
  console.log('testing gh actions');
    return (
        <header 
            style={{
                margin: `2rem auto`,
                padding: `0 1rem`,
            }}>
            <h1>
                <Link 
                    to='/'
                    style={{
                        color: `#0c0c0c`,
                        textDecoration: `none`,
                    }}
                 >
                    {siteTitle}
                </Link>
            </h1>
        </header>
    )
} 
