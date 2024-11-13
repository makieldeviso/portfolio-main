import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'

import projectsArr from "../data/ProjectsData";
import PlainSvgIcon from "./PlainSvg";

const ProjectLinkButtons = function ({title, codeLink, liveLink}) {
  const handleOpenLink = function (event) {
    const linkAddress = event.target.value;
    window.open(linkAddress);  
  }

  return (
    <div className='project-btns'>
      {codeLink && 
        <button 
          onClick={handleOpenLink} 
          value={codeLink} 
          data-action={'code'}
          aria-label={`${title}, view code`}
        >
          <PlainSvgIcon iconName={'code'} assignClass={'button-icon'}/>
          View Code
        </button>
        }
      {liveLink && 
        <button 
          onClick={handleOpenLink} 
          value={liveLink} 
          data-action={'site'}
          aria-label={`${title}, visit live`}
        >
          <PlainSvgIcon iconName={'openLink'} assignClass={'button-icon'}/>
          Visit Live
        </button>
      }
    </div>
  )
}

ProjectLinkButtons.propTypes = {
  title: PropTypes.string,
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
          title = {projectData.title}
          codeLink = {projectData.codeLink}
          liveLink = {projectData.liveLink}
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

  const featuredProjects = [];
  const minorProjects = [];
  projectsArr.forEach((project) => {
    if (project.projectType === 'featured') {
      featuredProjects.push(project);
    } else {
      minorProjects.push(project);
    }
  });

  const ProjectList = function ({projectsArray, assignClass}) {
    console.log(projectsArray)
    const projectsList = projectsArray.map(project => {
      return (<Project key={project.id} projectData={project}/>)
    });

    return (
      <ul className={`projects-list ${assignClass}`}>
        {projectsList}
      </ul>
    )
  }
  ProjectList.propTypes = {
    projectsArray: PropTypes.array,
    assignClass: PropTypes.string,
  }
  
  return (
    <section className='banner projects' id='Projects'>
      <h2 className='banner-header'>PROJECTS</h2>
      <div className='banner-cont'>
        <div className='projects-cont'>
         <ProjectList projectsArray={featuredProjects} assignClass={'featured'}/>
         <ProjectList projectsArray={minorProjects} assignClass={'minor'}/>
        </div>
      </div>
    </section>
  )
}

export default Projects