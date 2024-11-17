import PropTypes from 'prop-types'
import { useRef, useState } from "react"
import { fredData } from "../data/ProfileData";

// Introduction
const Introduction = function () {
  return (
    <div className='about-content introduction'>
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

// Background
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
    <div className={'about-content background'}>
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

// Objectives
const ObjectivesCards= function ({objectives}) {
  const activeCardRef = useRef(null);
  
  const Card = function ({objective}) {
    const cardRef = useRef(null);
    const handleCardFlip = function () {
      if (activeCardRef.current && activeCardRef.current !== cardRef.current) {
        activeCardRef.current.classList.remove('active');
      }
      
      if (cardRef.current.classList.contains('active')) {
        cardRef.current.classList.remove('active');

      } else {
        cardRef.current.classList.add('active');
        activeCardRef.current = cardRef.current;
      }
    }

    return (
      <div className='objective-card' onClick={handleCardFlip} ref={cardRef}>
        <div className='card-face front-face'>
          {objective.icon}
          <h5 className='objective-title'>{objective.title}</h5>
        </div>

        <div className='card-face back-face'>
          <span className='objective-title'>{objective.title}</span>
          <p className='objective-description'>{objective.description}</p>
        </div>
      </div>
    )
  }

  Card.propTypes = {
    objective: PropTypes.shape(
      {
        title: PropTypes.string,
        icon: PropTypes.object,
        description: PropTypes.string
      }
    )
  }

  const objectivesDisplay = objectives.map(objective => {
    return <Card key={crypto.randomUUID()} objective={objective}/>
  });

  return(
    <div className='objectives-cards'>
      {objectivesDisplay}
    </div>
  )
}

ObjectivesCards.propTypes = {
  objectives: PropTypes.array
}

const Objectives = function () {
  const objectives = fredData.objectives;

  return (
    <div className='about-objectives'>
      <h4>Objectives</h4>
      <div className='objectives-display'>
        <ObjectivesCards objectives={objectives}/>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

// About
const About = function () {
  return (
    <section className='banner about' id='About'>
      <h3 className="banner-header">ABOUT</h3>
      <div className="banner-cont">
        <Introduction/>
        <Background/>
        <Objectives/>
      </div>
    </section>
  )
}

export default About