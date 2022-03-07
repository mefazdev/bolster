import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function News() {
  return (
    <div>
      <Navbar />
      <div className="blog" style={{scrollBehavior:'smooth'}}>
        <div className="blogs__main">
          <div className="about__main__head">
            <h1>Blog</h1>
          </div>
        </div>

        <div className="blogMore__content">
          <div>
            <h2>Let your top performers move around the company</h2>
            <h6>Feb 19 2022 | Admin</h6>
            <div className="blogMore__img">
              <img src="https://res.cloudinary.com/drmjy3vrs/image/upload/v1640604869/laptop_abf3b3846b.png" />
            </div>
            <p>
              In 2015, New Jersey was ready for a pandemic. The state’s
              Department of Health (NJDOH) had conducted a full-scale exercise
              for influenza response, modeled on H1N1 and SARS as a highly
              contagious and airborne respiratory illness. Bringing in federal
              and state partner emergency management agencies, local
              jurisdictions, and hospitals, the scenario provided valuable
              insight into rapid procurement of medical equipment, hospital
              personnel needs, and vaccine distribution, all of which were
              carefully incorporated into a comprehensive statewide pandemic
              response plan. Still, when the Covid-19 pandemic hit, New Jersey
              was not spared. More than 26,000 people have died of the virus
              since early 2020, more than five times as many deaths as the NJDOH
 had predicted in their 2015 modeling of just such an event.
 In 2015, New Jersey was ready for a pandemic. The state’s
                Department of Health (NJDOH) had conducted a full-scale exercise
                for influenza response, modeled on H1N1 and SARS as a highly
                contagious and airborne respiratory illness. Bringing in federal
                and state partner emergency management agencies, local
                jurisdictions, and hospitals, the scenario provided valuable
                insight into rapid procurement of medical equipment, hospital
                personnel needs, and vaccine distribution, all of which were
                carefully incorporated into a comprehensive statewide pandemic
                response plan. Still, when the Covid-19 pandemic
            </p>
          </div>

          <div></div>
        </div>
        <div className="blog__more">
          <div className="blog__box gap-10 grid lg:grid-cols-3">
            <div className="">
              <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="lg:col-span-2">
              <h2>
                Leaders, don’t be afraid to talk about your fears and anxieties
              </h2>
              <h3>Feb 19 2022 | Admin</h3>
              <p>
                In 2015, New Jersey was ready for a pandemic. The state’s
                Department of Health (NJDOH) had conducted a full-scale exercise
                for influenza response, modeled on H1N1 and SARS as a highly
                contagious and airborne respiratory illness. Bringing in federal
                and state partner emergency management agencies, local
                jurisdictions, and hospitals, the scenario provided valuable
                insight into rapid procurement of medical equipment, hospital
                personnel needs, and vaccine distribution, all of which were
                carefully incorporated into a comprehensive statewide pandemic
                response plan. Still, when the Covid-19 pandemic.
                
              </p>
              <Link href="/Blog">
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
          <div className="blog__box pt-5  gap-10 grid lg:grid-cols-3">
            <div className="">
              <img src="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="lg:col-span-2">
              <h2>
                Leaders, don’t be afraid to talk about your fears and anxieties
              </h2>
              <h3>Feb 19 2022 | Admin</h3>
              <p>
                In 2015, New Jersey was ready for a pandemic. The state’s
                Department of Health (NJDOH) had conducted a full-scale exercise
                for influenza response, modeled on H1N1 and SARS as a highly
                contagious and airborne respiratory illness. Bringing in federal
                and state partner emergency management agencies, local
                jurisdictions, and hospitals, the scenario provided valuable
                insight into rapid procurement of medical equipment, hospital
                personnel needs, and vaccine distribution, all of which were
                carefully incorporated into a comprehensive statewide pandemic
                response plan. Still, when the Covid-19 pandemic
              </p>
              <Link href="/Blog">
                <button>READ MORE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
