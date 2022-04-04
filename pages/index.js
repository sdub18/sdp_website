import Head from 'next/head'
import React from 'react';


import Navbar from './../Components/navbar.js'
import Body from './../Components/home/body.js'
import Banner from '../Components/home/banner.js'
import Footer from '../Components/Footer/footer.js'

export default function Home() {
  return (
    <body style={{margin: "0"}}>
      <Head>
        <title>UMass Robotics</title>
      </Head>
      <div>
        <Navbar />
				<Banner />
        <Body />
        <Footer />
      </div>
    </body>
  )
}
