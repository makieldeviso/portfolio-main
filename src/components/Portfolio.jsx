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

  const Projects = projectsArr.map((project) => {
    return (
      <div key={project.title} className='project'>
        <p className='title'>{project.title}</p>
        <img src={project.previewImg} alt={`${project.title} preview`} className='preview'/>
        <p className='description'>{project.description}</p>

        <div className='project-btns'>
          <button>View Code</button>
          <button>Visit Site</button>
        </div>
      </div>
    )
  })
  
  return (
    <div className='banner portfolio'>
      <div className='banner-cont'>
        <h2>Portfolio</h2>

        <div className='projects-cont'>
          {Projects}
        </div>
      </div>
    </div>
  )
}

export default Portfolio