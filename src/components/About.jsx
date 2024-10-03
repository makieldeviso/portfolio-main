import { Picture, PicIcon, TechIcon } from "./Assets"

const AboutBanner = function () {
  return (
    <div className='banner about'>
      <div className="banner-cont">
        <div className='about-text'>
          <h2 className='greeting'>Fred Mark</h2>
          <p>
          Front-end web developer with the objective of creating responsive, accessible and efficient websites and web applications. Focuses in building interactive and dynamic apps using React.
          </p>
        </div>

        <div className='about-picture'>
          <Picture assetName={'profile-picture'} altText={'Fred Mark profile picture'}/>
        </div>
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
        <h2>Technologies</h2>
        <TechList/>
      </div>
    </div>
  )
}

export default AboutBanner
export {TechBanner}