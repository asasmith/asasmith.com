import { Link } from 'gatsby'
import React from 'react'

export default function Header ({ siteTitle }) {
    return (
        <header 
            style={{
                margin: `2rem auto`,
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