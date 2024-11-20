import { useRef } from "react";

import { fredData } from "../data/ProfileData";

const Contact = function () {
  const instructRef = useRef(null);

  const handleCopyEmailAdd = async function () {
    const emailAdd = fredData.contacts.email.contactInfo;

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
          <span ref={instructRef} className="click-instruction">Click to copy</span>
          <p 
            className="email-address"
            onClick={handleCopyEmailAdd}
          >
            {fredData.contacts.email.icon}
            <span> fredmark<wbr/>.baldeviso<wbr/>@gmail.com</span>
          </p>
        </div>

        <div className="contact-links">
          <div className="perspective-box">
            <a href={fredData.contacts.linkedin.contactInfo}
              target="_blank"
              aria-label="Visit Linkedin page"
              title="Visit Linkedin page"
            >
              {fredData.contacts.linkedin.icon}
            </a>
          </div>
          
          <div className="perspective-box">
            <a href={fredData.contacts.github.contactInfo}
              target="_blank"
              aria-label="Visit Github page"
              title="Visit Github page"
            >
              {fredData.contacts.github.icon}
            </a>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Contact