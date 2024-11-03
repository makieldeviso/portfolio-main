import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react"
import { fredData } from "../data/AboutData"




const AboutPanels = function () {
  const aboutContent = fredData.objectives;
  const aboutKeys = Object.keys(aboutContent);
  const currentActive = useRef(null);
  
  const Panel = function ({data}) {
    const panelRef = useRef(null);

    const handleOpenPanel = function () {
      currentActive.current.classList.remove('active');
      panelRef.current.classList.add('active');

      currentActive.current = panelRef.current;
    }

    useEffect(() => {
      if (panelRef.current.dataset.id === 'intro') {
        panelRef.current.classList.add('active');
        currentActive.current = panelRef.current;
      }
    },[])

    return (
      <div ref={panelRef} className={`about-panel`} data-id={data}>
        <button 
          className='panel-button'
          onClick={handleOpenPanel}
          value={data}
        >
          {aboutContent[data].title}
        </button>
        <p className='panel-text'>{aboutContent[data].description}</p>   
      </div>
    )
  }
  
  const panels = aboutKeys.map(data => {
    return <Panel key={crypto.randomUUID()} data={data}/>
  })

  return (
    <div className='about-panels'>
      {panels}
    </div>
  )
}

AboutPanels.propTypes = {
  aboutContent: PropTypes.object,
  setTextContent: PropTypes.func,
}

const About = function () {

  return (
    <section className='banner about' id='About'>
      <h2 className="banner-header">ABOUT</h2>
      <div className="banner-cont">
      
        <AboutPanels/>

      </div>
    </section>
  )

}

export default About