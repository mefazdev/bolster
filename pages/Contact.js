import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
// import api from '../api/index.php'
export default function Contact() {

  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [phone , setPhone] = useState('')
  const [sending, setSending] = useState(false)
  const [verified, setVerified ]= useState(false)
      
 const data = {
   name : name,
   email : email,
   phone : phone,
   message : message,
  //  mailSent: false,
  // error: null

 }  
 

//  const API_PATH = 'https://bolster-amber.vercel.app/api/index';
//  const send = async (e)=>{
//   e.preventDefault();
//   axios({
//     method: 'post',
//     url: `${API_PATH}`,
//     headers: { 'content-type': 'application/json' },
//     data: data
//   })
//     .then(result => {
//       // this.setState({
//       //   mailSent: result.data.sent
//       // })
//       console.log('result >>>',result)
//     }
    
//     )
//     .catch(
//       // error => this.setState({ error: error.message })
//       console.log('error found ==>>')
//       );

//   // await console.log(data)
//   setSending(false)
//  }


const send = async (e)=>{

  e.preventDefault()
  setSending(true)
  fetch('/api/mail', { 
    method:'post',
    body:JSON.stringify(data)
   
  }) 
  setSending(false)
  setName('')
  setEmail('')
  setPhone('')
  setMessage('')
}

  return (
    <div>
      <Navbar />
      <div className="contact" style={{scrollBehavior:'smooth'}}>
        <div className="about__main">
          <div className="about__main__head">
            <h1>Contact</h1>
          </div>
        </div>

        <div className="contact__content container pl-2 pr-2  pr-15">
          <div className="contact__first__row  grid grid-cols-1 lg:grid-cols-2">
            <div>
              <h5>CONTACT US</h5>
              <h1>We Love to Hear From You</h1>
              <p>
                Bolster foundation is always looking for excited and talented
                people looking for flexible non-conventional volunteering
                experience.
              </p>
            </div>
          </div>
          <div className="contact__second__row  p-3 justify-between  grid grid-cols-1  lg:grid-cols-3">
            <div className="contact__adress__div  lg:col-span-2 ">
              <div className="flex contact__adress">
                <LocationOnIcon className="contact__adress__icons" />
                <p>
                  Bolster foundation <br />
                  Bolster Girls Campus,Kottakkal
                  <br />
                  Malappuram, Kerala,
                  <br /> India - 676503
                </p>
              </div>
              <div className="flex contact__phone">
                <LocalPhoneIcon className="contact__adress__icons" />
                <p>
                  <a href="tel:+91 345 234 8675"> +91 345 234 8675</a>

                  <br />
                </p>
              </div>
              <div className="flex contact__mail">
                <AlternateEmailIcon className="contact__adress__icons" />
                <p>
                  bolsterfoundation@gmail.com,
                  <br />
                </p>
              </div>
              <div className="contact__social">
                <h3>Follow Us</h3>
                <a href="https://www.facebook.com/bolsterfoundation">
                  <FacebookIcon className=" contact__social__icons transform motion-safe:hover:scale-110  ... " />
                </a>

//                 <a href="https://twitter.com/cleverkingsinfo">
                  <TwitterIcon className="contact__social__icons transform motion-safe:hover:scale-110 ...  " />
//                 </a>

                <a href="https://www.youtube.com/@BolsterFoundation">
                  <YouTubeIcon className="contact__social__icons transform motion-safe:hover:scale-110 ...  " />
                </a>

                <a href="https://instagram.com/bolsterfoundation?igshid=OGQ2MjdiOTE=">
                  <InstagramIcon className="contact__social__icons transform motion-safe:hover:scale-110 ...  " />
                </a>

               
              </div>
            </div>
            {/*<<<<<<<<<<<<<<<<<<<<< CONTACT FROM >>>>>>>>>>>>>>>>>>>> */}
            <div className=" contact__form__div">
              <h3>Write to us</h3>

              <div>
                <form
                // action="#"
                  onSubmit={send}
                  className="grid grid-cols-1"
                >
                  <input
                    required
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e)=>setName(e.target.value)}
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                  {/* <div className='contact__phone__input'> */}
                  <input 
                  required
                   name="Phone"
                   placeholder="Phone" 
                  className='pl-2'
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value    )}
                  
                  />
                  {/* <PhoneInput  
              name='phone'
               className='pl-2'
               placeholder="Phone"
              //  value={phone}
              //  onChange={setPhone}
               required
               defaultCountry='IN'
               
               /> */}
                  {/* </div>  */}

                  <textarea
                    name="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e)=>setMessage(e.target.value)}
                  />
                  {/* <ReCAPTCHA className='mt-3'
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
               onChange={()=>setVerified(true)}
             /> */}
                <button
                style={{width:'100%'}}
                type='submit'
                  >
                    
                    {sending ? "SENDING..." :'SEND'}  
                  </button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}



// 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
// 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
