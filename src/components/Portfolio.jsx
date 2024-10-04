import shoppingCartPreview from '../assets/projects-preview/shopping-cart.png';
import memoryCardPreview from '../assets/projects-preview/memory-card.png';

const projectsArr = [];

class Project {
  constructor(title, previewImg, description, codeLink, liveLink) {
    this.title = title;
    this.previewImg = previewImg;
    this.description = description;
    this.codeLink = codeLink;
    this.liveLink = liveLink;
    projectsArr.push(this)
  }
}

const shoppingCart = new Project(
  'Shopping Cart',
  shoppingCartPreview,
  'A shopping cart/ store website project titled A-TIER physical games store. This portfolio project shows a shopping website with a homepage banner, a shopping window and cart functionality feature. Created with React emphasizing client-side routing with React Router.',
  'https://github.com/makieldeviso/shopping-cart',
  'https://a-tier.netlify.app/'
)

const memoryCard = new Project(
  'Memory Card Game',
  memoryCardPreview,
  'A memory card game with a pokemon theme. This project emphasizes state management while fetching and utilizing data from external API.',
  'https://github.com/makieldeviso/memory-card-game',
  'https://memory-card-game-4cx.pages.dev/'
)


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