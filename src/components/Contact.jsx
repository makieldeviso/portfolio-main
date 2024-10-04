// Components
import { PicIcon, LocalIcon } from "./Assets"

let Contacts = [];
class ContactInfo {
  constructor(contactName, contactInfo) {
    this.contactName = contactName;
    this.contactInfo = contactInfo;
    Contacts.push(this);
  }
}

const linkedin = new ContactInfo(
  'Linkedin', 
  'https://www.linkedin.com/in/fred-mark-baldeviso-433138243',
)

const github = new ContactInfo(
  'Github',
  'https://github.com/makieldeviso'
)

const Contact = function () {
  return (
    <div className="banner contact" id='Contact'>
      <div className="banner-cont">
        <p className="contact-msg">Get in touch</p> 

        <div className="email contact">
          <PicIcon iconName={'mail'}/>
          <p className="email-address">fredmark.baldeviso@gmail.com</p>
        </div>

        <div className="contact-links">
          <a href={linkedin.contactInfo}
            target="_blank"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <LocalIcon iconName={'Linkedin'}/>
          </a>

          <a href={github.contactInfo}
            target="_blank"
            aria-label="Github"
            title='Github'
          >
            <LocalIcon iconName={'Github'}/>
          </a>
        </div>

      </div>
    
    </div>
  )
}

export default Contact