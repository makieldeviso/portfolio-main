import PropTypes from 'prop-types';

import { fredData } from '../data/ProfileData'
import { TechIcon } from "./Assets";

const Tech = function ({techStackData}) {
  const techTypeKeys = Object.keys(techStackData);
  
  const TechList = function ({techType, techList}) {
    const TechItems = techList.map((techName, index) => {
      const delay = `${500 + (100 * (index + 1))}ms`;
      return (
        <li key={techName} style={{animationDelay: delay}}>
          <div className='tech-icon-cont'>
            <TechIcon iconName={techName}/>
            <p>{techName}</p>
          </div>
        </li>
      )
    })

    return (
      <ul className={`tech-list ${techType}`}>
        {TechItems}
      </ul>
    )
  }

  TechList.propTypes = {
    techType: PropTypes.string,
    techList: PropTypes.array
  }

  const TechStackLists = techTypeKeys.map(type => {
    const techList = techStackData[type];
    return (
      <TechList key={crypto.randomUUID()} 
        techType={type} 
        techList={techList}
      />
    )
  })

  return (
    <div className="home-tech">
      <div className="tech-cont">
        {TechStackLists}
      </div>
    </div>
  )
}

Tech.propTypes = {
  techStackData: PropTypes.object
}

const Home = function () {
  return (
    <section className='banner home' id='Home'>
      <div className="banner-cont">
        <div className='home-text'>
          <h2 className='owner-name'>
            {fredData.firstName.toUpperCase()}
          </h2>
          <h3 className='owner-title'>{fredData.title}</h3>
          <p>{fredData.tagline}</p>
        </div>

        <div className='home-picture'>
          <img src={fredData.profilePictures[0]} alt="Fred Mark Baldeviso profile" />
        </div>

        <Tech techStackData={fredData.techStack}/>
      </div>
    </section>
  )
}

export default Home