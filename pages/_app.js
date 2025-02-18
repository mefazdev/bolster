import Head from 'next/head'

import '../styles/globals.css';
import '../styles/navbar.css'
import '../styles/home.css'
import '../styles/footer.css'
import '../styles/blogs.css'
import '../styles/about.css'
import '../styles/vision.css'
import '../styles/we.css'
import '../styles/wedo.css'
import '../styles/contact.css'
import '../styles/blog.css'
import '../styles/photos.css'
import '../styles/programmes.css'
import '../styles/admin.css'
import '../styles/buddy.css'
import '../styles/career.css'
import '../styles/me.css'
import '../styles/skill.css'
import '../styles/madrasa.css'
import '../styles/cariculum.css'
import '../styles/testimonial.css'

import '../styles/impact.css'
import '../styles/milestones.css'
import { useEffect } from 'react';
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("aos").then((aos) => {
      aos.init({});
    });
  }, []);
  return (
    <>
    <Head>
 
    <style>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&family=Quicksand&display=swap);


 </style>
 <style>
@import url(https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap);

@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&display=swap);

@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Heebo:wght@200;300;400;500&family=Poppins:wght@100;200;400&family=Quicksand&family=Roboto:wght@100&family=Staatliches&display=swap);
</style>
<style>
@import url(https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&display=swap);
</style>
<style>
@import url(https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap);
</style>
<style>
@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Lora:wght@500&family=Merriweather:wght@300&family=Rubik:wght@300&display=swap);
</style> * 
<link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
    </Head>
  <Component {...pageProps}/>
  <Script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="beforeInteractive"
        />
        <Script id="aos-init" strategy="lazyOnload" />
  </>
  ) 
}

export default MyApp
