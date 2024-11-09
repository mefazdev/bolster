import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
import Head from "next/head";
export default function Milestones() {
  return (
    <div>
      <Head>
        <title>Bolster Foundation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="m__stone">
        <div className="about__main">
          <div className="about__main__head">
            <h1>Milestones</h1>
          </div>
        </div>
        <div className="about__content grid gap-6">
          <div className=" bg-gray-50 p-4 shadow rounded-lg">
            <div className="m__stone__head">
              <h3>2018 </h3>
            </div>
            <p>
              Three students founded the Bolster Foundation to serve the
              minority communities.{" "}
            </p>
          </div>

          <div className=" bg-gray-50 p-4 shadow rounded-lg">
            <div className="m__stone__head">
              <h3>2019 June </h3>
            </div>
            <p>
              The first project on reforming the administrative system of
              Madeenathunnoor College. <br />
              Collaborated with the MNC to create a framework for the
              educational administration
            </p>
          </div>
          <div className=" bg-gray-50 p-4 shadow rounded-lg">
            <div className="m__stone__head">
              <h3>2021 June</h3>
            </div>
            <p>
              <b>Bolster Monsoon Camp</b>
              <br /> The camp targeted girl students who had just appeared for
              the matriculation examination in the year <br />
              49 students participated in the virtual camp <br />
              23 delegates from various parts of the country participated in 17
              sessions
            </p>
          </div>
          <div className=" bg-gray-50 p-4 shadow rounded-lg">
            <div className="m__stone__head">
              <h3>2021 September </h3>
            </div>
            <p>
              <b>Bolster Girls Camp </b> <br />
              A campus specifically for girl students with residential
              facilities <br />
              24 students took admission in the first year <br />A green campus
              spread in one and a half acre land of Kottakkal, Malappuram
            </p>
          </div>

          <div className=" bg-gray-50 p-4 shadow rounded-lg">
            <div className="m__stone__head">
              <h3>
                2021 October <br />
              </h3>
            </div>
            <p>
              <b> Me time Interaction</b> <br />
              A project to encourage girls to study and act <br />
              13 sessions held till March 12, 2022 <br />
              Interested girl students actively participate Onwards
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
