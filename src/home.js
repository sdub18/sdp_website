import React from 'react';

import Navbar from './navbar.js'
import Body from './body.js'
import Banner from './banner.js'
import Footer from './footer.js'

export default function Home() {
  return (
    <body style={{margin: "0"}}>
      <div>
        <Navbar />
				<Banner />
        <Body />
        <Footer />
      </div>
    </body>
  )
}
