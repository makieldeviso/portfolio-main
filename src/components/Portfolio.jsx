import projectsArr from "../data/Projects";

const Portfolio = function () {

  const handleOpenLink = function (event) {
    const linkAddress = event.target.value;
    window.open(linkAddress);  
  }

  const Projects = projectsArr.map((project) => {
    return (
      <div key={project.title} className='project'>
        <p className='title'>{project.title}</p>
        <img src={project.previewImg} alt={`${project.title} preview`} className='preview'/>
        <p className='description'>{project.description}</p>

        <div className='project-btns'>
          <button onClick={handleOpenLink} value={project.codeLink}>View Code</button>
          <button onClick={handleOpenLink} value={project.liveLink}>Visit Site</button>
        </div>
      </div>
    )
  })
  
  return (
    <div className='banner portfolio' id='Portfolio'>
      <div className='banner-cont'>
        <h2 className='banner-header'>PORTFOLIO</h2>

        <div className='projects-cont'>
          {Projects}
        </div>

        <button className='more-projects-btn'>See more</button>

      </div>
    </div>
  )
}

export default Portfolio