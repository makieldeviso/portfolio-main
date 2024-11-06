import { useRef } from "react";

import { fredData } from "../data/ProfileData";
import PlainSvgIcon from "./PlainSvg";

const Contact = function () {
  const instructRef = useRef(null);

  const handleCopyEmailAdd = async function (e) {
    const emailAdd = e.target.textContent;

    try {
      await navigator.clipboard.writeText(emailAdd);
      instructRef.current.textContent = 'Copied';
      setTimeout(() => {
        instructRef.current.textContent = 'Click to copy';
      }, 1000);

    } catch (error){
      throw new Error(error.message)
    }
  }

  return (
    <section className="banner contact" id='Contact'>
      <h3 className="banner-header">CONTACT</h3>
      <div className="banner-cont">
        
        <div className="email contact">
          <p className='email-message'>Get in touch</p>
          <p ref={instructRef} className="click-instruction">Click to copy</p>
          <PlainSvgIcon iconName={'mail'}/>
          <p 
            className="email-address"
            onClick={handleCopyEmailAdd}
          >
            {fredData.contacts.email.contactInfo}
          </p>
        </div>

        <div className="contact-links">
          <a href={fredData.contacts.linkedin.contactInfo}
            target="_blank"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <PlainSvgIcon iconName={'linkedin'}/>
          </a>

          <a href={fredData.contacts.github.contactInfo}
            target="_blank"
            aria-label="Github"
            title='Github'
          >
            <PlainSvgIcon iconName={'github'}/>
          </a>
        </div>

      </div>
    
    </section>
  )
}

export default Contact