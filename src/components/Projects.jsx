import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'

import projectsArr from "../data/ProjectsData";
import PlainSvgIcon from "./PlainSvg";

const ProjectLinkButtons = function ({codeLink, liveLink}) {
  const handleOpenLink = function (event) {
    const linkAddress = event.target.value;
    window.open(linkAddress);  
  }

  return (
    <div className='project-btns'>
      {codeLink && 
        <button onClick={handleOpenLink} value={codeLink} data-action={'code'} title='View Code'>
          <PlainSvgIcon iconName={'github'} assignClass={'button-icon'}/>
        </button>
        }
      {liveLink && 
        <button onClick={handleOpenLink} value={liveLink} data-action={'site'} title='Live View'>
          <PlainSvgIcon iconName={'openLink'} assignClass={'button-icon'}/>
        </button>
      }
    </div>
  )
}

ProjectLinkButtons.propTypes = {
  codeLink: PropTypes.string,
  liveLink: PropTypes.string
}

const Project = function ({projectData}) {
  const [previewPage, setPreviewPage] = useState(1);
  const projectRef = useRef(null);
 
  const handleChangePreview = function () {
    if (previewPage >= 4 ) {
      setPreviewPage(1);
    }

    else {
      setPreviewPage(previewPage + 1);
    }
  }

  useEffect(() => {
    const handleShowProject = function () {
      const screenHeight = window.innerHeight;
      const {y, height} = projectRef.current.getBoundingClientRect();

      const projectEntry = Math.floor(y + (height * 0.25));
      
      if (projectEntry < screenHeight) {
        projectRef.current.classList.add('shown');
      }
    }

    window.addEventListener('load', handleShowProject);
    window.addEventListener('scroll', handleShowProject);

    return () => {
      window.removeEventListener('load', handleShowProject);
      window.removeEventListener('scroll', handleShowProject);
    }
  },[]);

  return (
    <li className={`project`} ref={projectRef}>
      <div className="project-cont">
        <div className={`preview sprite-cont`} onClick={handleChangePreview}>
          <img 
            src={projectData.previewImg} 
            alt={`${projectData.title} preview`} 
            className={`preview-img sprite-img page-${previewPage}`}
          />
        </div>
        <h3 className='title'>{projectData.title}</h3>
        <p className='description'>{projectData.description}</p>

        <ProjectLinkButtons 
          codeLink= {projectData.codeLink}
          liveLink= {projectData.liveLink}
        />
      </div>
    </li>
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

  const ProjectsList = projectsArr.map(project => {
    return (<Project key={project.id} projectData={project}/>)
  });
  
  return (
    <section className='banner projects' id='Projects'>
      <h2 className='banner-header'>PROJECTS</h2>
      <div className='banner-cont'>
        <div className='projects-cont'>
          <ul className='projects-list featured'>
            {ProjectsList}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects