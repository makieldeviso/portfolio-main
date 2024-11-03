import PlainSvgIcon from "./PlainSvg";

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
    <section className="banner contact" id='Contact'>
      <h3 className="banner-header">CONTACT</h3>
      <div className="banner-cont">
        
        <div className="email contact">
          <PlainSvgIcon iconName={'mail'}/>
          <p className="email-address">fredmark.baldeviso@gmail.com</p>
        </div>

        <div className="contact-links">
          <a href={linkedin.contactInfo}
            target="_blank"
            aria-label="Linkedin"
            title="Linkedin"
          >
            <PlainSvgIcon iconName={'linkedin'}/>
          </a>

          <a href={github.contactInfo}
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