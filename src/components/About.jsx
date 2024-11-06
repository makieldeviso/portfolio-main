import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react"
import { fredData } from "../data/ProfileData";

const Introduction = function () {
  return (
    <div className='about-introduction'>
      <h3>Introduction</h3>
      <p>{fredData.introduction}</p>
    </div>
  )
}

const ObjectivePanel = function ({data, currentActive}) {
  const panelRef = useRef(null);
  const currentActiveRef = currentActive;
  
  const handleOpenPanel = function () {
    currentActiveRef.current.classList.remove('active');
    panelRef.current.classList.add('active');
    currentActiveRef.current = panelRef.current;
  }

  useEffect(() => {
    if (panelRef.current.dataset.id.match(/User-centric design/i)) {
      panelRef.current.classList.add('active');
      currentActiveRef.current = panelRef.current;
    }
  },[])

  return (
    <div ref={panelRef} className={`about-objective`} data-id={data.title}>
      <h4 className='objective-heading' onClick={handleOpenPanel}>{data.title}</h4>
      {data.icon}
      <p className='objective-text'>{data.description}</p>   
    </div>
  )
}

ObjectivePanel.propTypes = { 
  data: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.object,
    description: PropTypes.string
  }),
  currentActive: PropTypes.object
};

const Objectives = function () {
  const aboutContent = fredData.objectives;
  const aboutKeys = Object.keys(aboutContent);
  const currentActive = useRef(null);

  const panels = aboutKeys.map(key => {
    return (
      <ObjectivePanel 
        key={crypto.randomUUID()} 
        data={aboutContent[key]}
        currentActive={currentActive}
      />
    )
  })

  return (
    <div className='about-objectives'>
      <h3>Objectives</h3>
      <div className='objective-content'>
        <div className='objective-panels'>{panels}</div>
      </div>
    </div>
  )
}

Objectives.propTypes = {
  aboutContent: PropTypes.object,
  setTextContent: PropTypes.func,
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
      <h3>Background</h3>
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

const About = function () {
  return (
    <section className='banner about' id='About'>
      <h2 className="banner-header">ABOUT</h2>
      <div className="banner-cont">
        <Introduction/>
        <Objectives/>
        <Background/>
      </div>
    </section>
  )

}

export default About