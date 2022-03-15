import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
export default function Testimonial () {
  return (
    <div >
              <Head>
        <title>Bolster Foundation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>

<div className='about'>
<div className="about__main">
          <div className="about__main__head">
            <h1>Testimonials</h1>
          </div>
        </div>
        <div className="testi__content">
            
            </div>   
</div>
    
    </div>
  )
}
