import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'
export default function Career() {
  return (
    <div>
  
<Head>
        <title>Bolster Career Solutions</title>
       
        <meta
          name="description"
          content=" Do you struggle with knowing which career path is right for you? Are
          you driven to transition into a career that takes advantage of your
          unique strengths, passions, and experiences—while meeting your goals
          to be involved in work that is meaningful and inspiring? Since 2018
          Bolster Career Solutions supported over 100 talented, motivated
          students to define motivating career paths and goals. We can help
          you define your next great-fit career step. We give you the best of
          performance with world class servicing with a flexible and result
          oriented approach. We make sure to plan and execute campaigns error
          less.
          "
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in/Career" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="career" style={{scrollBehavior:'smooth'}}>
        <div className="career__main">
          <div className="about__main__head">
            <h1>Bolster Career Solutions</h1>
          </div>
        </div>
        <div className="career__content">
          <p>
            Do you struggle with knowing which career path is right for you? Are
            you driven to transition into a career that takes advantage of your
            unique strengths, passions, and experiences—while meeting your goals
            to be involved in work that is meaningful and inspiring? Since 2018
            Bolster Career Solutions supported over 100 talented, motivated
            students to define motivating career paths and goals. We can help
            you define your next great-fit career step. We give you the best of
            performance with world class servicing with a flexible and result
            oriented approach. We make sure to plan and execute campaigns error
            less.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// git remote add heroku git@heroku.com:bolsterfoundation.git
