import {fredData} from '../data/AboutData'
import { TechIcon } from "./Assets";

const Home = function () {
  return (
    <div className='banner about' id='Home'>
      <div className="banner-cont">
        <div className='about-text'>
          <h2 className='owner-name'>
            {fredData.firstName.toUpperCase()}
          </h2>
          <h3 className='owner-title'>{fredData.title}</h3>
          <p>{fredData.greetings}</p>
        </div>

        <div className='about-picture'>
          <img src={fredData.profilePicture[0]} alt="Fred Mark Baldeviso profile" />
        </div>

        <TechBanner/>
      </div>
    </div>
  )
}

const TechBanner = function () {
  const userTech = ['HTML', 'CSS', 'JavaScript', 'React'];

  const TechList = function () {
    const TechItems = userTech.map((techName) => {
      return (
        <li key={techName}>
          <div className='tech-icon-cont'>
            <TechIcon iconName={techName}/>
            <p>{techName}</p>
          </div>
        </li>
      )
    })

    return (
      <ul className='tech-list'>
        {TechItems}
      </ul>
    )
  }

  return (
    <div className="banner tech">
      <div className="banner-cont">
        <TechList/>
      </div>
    </div>
  )
}

export default Home
export {TechBanner}