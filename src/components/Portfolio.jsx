import { useState } from "react";
import PropTypes from 'prop-types'

import projectsArr from "../data/Projects";
import PlainSvgIcon from "./PlainSvg";

const Project = function ({projectData}) {

  const [previewPage, setPreviewPage] = useState(1);

  const handleOpenLink = function (event) {
    const linkAddress = event.target.value;
    window.open(linkAddress);  
  }

  const handleChangePreview = function () {
    if (previewPage >= projectData.previewImg.length ) {
      setPreviewPage(p => p = 1);
    }

    else {
      setPreviewPage(p => p + 1);
    }
  }

  return (
    <div className='project'>
        
        <div className={`preview page-${previewPage}`} onClick={handleChangePreview}>
          {
            projectData.previewImg.map((img) => {
              return (
                <img key={crypto.randomUUID()}
                  src={img} 
                  alt={`${projectData.title} preview`} 
                  className='preview-img'
                />
              )
            })
          }
        </div>
        <p className='title'>{projectData.title}</p>
        <p className='description'>{projectData.description}</p>

        <div className='project-btns'>
          <button onClick={handleOpenLink} value={projectData.codeLink}>
            <PlainSvgIcon iconName={'github'} assignClass={'button-icon'}/>
          </button>
          <button onClick={handleOpenLink} value={projectData.liveLink}>
            <PlainSvgIcon iconName={'open-link'} assignClass={'button-icon'}/>
          </button>
        </div>
      </div>
  )
}

Project.propTypes = {
  projectData: PropTypes.shape({
    title: PropTypes.string,
    previewImg: PropTypes.array,
    description: PropTypes.string,
    codeLink: PropTypes.string,
    liveLink: PropTypes.string
  })

}


const Portfolio = function () {

  const Projects = projectsArr.map((project) => {
    return (<Project key={project.id} projectData={project}/>)
  })  
  
  return (
    <div className='banner portfolio' id='Portfolio'>
      <div className='banner-cont'>
        <h2 className='banner-header'>PORTFOLIO</h2>

        <div className='projects-cont'>
          {Projects}
        </div>

      </div>
    </div>
  )
}

export default Portfolio