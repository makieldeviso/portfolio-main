import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react"
import { fredData } from "../data/ProfileData";

const Introduction = function () {
  return (
    <div className='about-introduction'>
      <h4>Introduction</h4>
      <p>{fredData.introduction}</p>
    </div>
  )
}

const PageButtons = function ({handleChangeText, textKeys}) {
  const [page, setPage] = useState(1);
  
  const buttonSequence = function (e) {
    handleChangeText(e);
    setPage(Number(e.target.value));
  }

  const pageButtons = textKeys.map((key, index) => {
    const pageNumber = index + 1;
    const activeStatus = pageNumber <= page ? 'active': '';
    const disabled = pageNumber === page;
    
    return (
      <button 
        key={key} 
        onClick={buttonSequence}
        aria-label={`Background page ${pageNumber}`}
        value={pageNumber}
        className={activeStatus}
        disabled={disabled}
      >
      </button>
    )
  })

  return (
    <div className='background-page-buttons'>
      {pageButtons}
    </div>
  )
}

PageButtons.propTypes = {
  handleChangeText: PropTypes.func,
  textKeys: PropTypes.array
}

const Background = function () {
  const textRailRef = useRef();
  const backgroundTexts = fredData.background;

  const textKeys = Object.keys(backgroundTexts);
  const textContents = textKeys.map(key => {
    return (
      <p key={key}>{backgroundTexts[key]}</p>
    )
  })

  const handleChangeText = function (e) {
    const pageNumber = e.target.value;
    const translation = `${-100 * (pageNumber - 1)}%`;
    textRailRef.current.style.transform = `translateX(${translation})`;
  }
  
  return (
    <div className={'about-background'}>
      <h4>Background</h4>
      <PageButtons 
        handleChangeText={handleChangeText}
        textKeys={textKeys}
      />

      <div className='background-text-cont'>
        <div className='text-rail' ref={textRailRef}>
          {textContents}
        </div>
      </div>
    </div>
  )
}


const ObjectivesButtons = function ({objectives, screenRef}) {

  const handleShowObjective = function (e) {
    const objectiveDescription = objectives[e.target.value].description;
    const objectiveIndex = e.target.dataset.index;
    const translation = `translateX(${-100 * objectiveIndex}%)`;
    
    screenRef.current.style.transform = translation;
    console.log(screenRef.current)
  }

  const objectivesKeys = Object.keys(objectives);
  const objectivesButtons = objectivesKeys.map((key, index) => {
    return(
      <button key={key}
        className='objective-button'
        value={key}
        data-index={index}
        aria-label={objectives[key].title}
        onClick={handleShowObjective}
      >
        {objectives[key].icon}
      </button>
    )
  })

  return (
    <div className='panel-buttons'>
      {objectivesButtons}

    </div>
  )
}

const ObjectivesScreen = function ({objectives, screenRef}) {

  const objectivesKeys = Object.keys(objectives);
  const objectivesDisplay = objectivesKeys.map(key => {
    return (
      <div key={key} className='objective-display'>
        <h5 className='objective-heading'>{objectives[key].title}</h5>
        <p>{objectives[key].description}</p>
      </div>
    )
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${objectivesKeys.length}, 100%)`,
    gridTemplateRows: '1fr',
  }

  return(
    <div className='panel-screen'>
      <div className='screen-rail' ref={screenRef} style={{...gridStyle}}>
        {objectivesDisplay}
      </div>
    </div>
  )
}


const Objectives = function () {
  const objectives = fredData.objectives;
  const screenRef = useRef(null);

  return (
    <div className='about-objectives'>
      <h4>Objectives</h4>

      <div className='objectives-panel'>

        <ObjectivesButtons objectives={objectives} screenRef={screenRef}/>
        <ObjectivesScreen objectives={objectives} screenRef={screenRef}/>

      </div>

    </div>
  )
}













const About = function () {
  return (
    <section className='banner about' id='About'>
      <h3 className="banner-header">ABOUT</h3>
      <div className="banner-cont">
        <Introduction/>
        <Objectives/>
        <Background/>
      </div>
    </section>
  )

}

export default About