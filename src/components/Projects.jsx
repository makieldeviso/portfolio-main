import { useState } from "react";
import PropTypes from 'prop-types'

import projectsArr from "../data/ProjectsData";
import PlainSvgIcon from "./PlainSvg";

const Project = function ({projectData}) {
  const [previewPage, setPreviewPage] = useState(1);

  const handleOpenLink = function (event) {
    const linkAddress = event.target.value;
    window.open(linkAddress);  
  }

  const handleChangePreview = function () {
    if (previewPage >= 4 ) {
      setPreviewPage(p => p = 1);
    }

    else {
      setPreviewPage(p => p + 1);
    }
  }

  return (
    <div className='project'>
        <div className={`preview sprite-cont`} onClick={handleChangePreview}>
          <img 
            src={projectData.previewImg} 
            alt={`${projectData.title} preview`} 
            className={`preview-img sprite-img page-${previewPage}`}
          />
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
    previewImg: PropTypes.string,
    description: PropTypes.string,
    codeLink: PropTypes.string,
    liveLink: PropTypes.string
  })

}


const Projects = function () {

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

export default Projects