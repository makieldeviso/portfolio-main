import profilePicture1 from '../assets/profile-pictures/profile-1.png';
import PlainSvgIcon from '../components/PlainSvg';

class ProfileData {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const fredData = new ProfileData('Fred Mark', 'Baldeviso');
fredData.profilePictures = [profilePicture1];
fredData.title = 'Front-end Web Developer';
fredData.techStack = {
  frontEnd: [
    {
      title: 'HTML',
      icon: <PlainSvgIcon iconName={'html'} assignClass={'tech-icon'}/>
    },
    {
      title: 'CSS',
      icon: <PlainSvgIcon iconName={'css'} assignClass={'tech-icon'}/>
    },
    {
      title: 'JavaScript',
      icon: <PlainSvgIcon iconName={'javaScript'} assignClass={'tech-icon'}/>
    },
    {
      title: 'React',
      icon: <PlainSvgIcon iconName={'react'} assignClass={'tech-icon'}/> 
    }
  ] 
};

fredData.tagline = 'Creates responsive, accessible and efficient websites and web applications. Focuses in building interactive and dynamic apps with JavaScript and React.';

fredData.introduction = "I'm Fred Mark Baldeviso, a web developer from Leyte, Philippines. I specialize in crafting streamlined digital experiences in the web. And aims to create websites that follows established trends for better user experience while still exuding creativity and style."


fredData.objectives = [
  {
    title: "Frameworks and libraries",
    icon: <PlainSvgIcon iconName={'framework'} assignClass={'objective-icon'}/>,
    description: "I'm an enthusiast for fundamentals. I think a lot of problems can be solved by being equipped with core skills and principles. But, effectively utilizing frameworks and libraries is also crucial to keep up with the ever advancing field of web development. I take advantage of these technologies for improved productivity and code quality."
  },
  {
    title: 'User-centric Design',
    icon: <PlainSvgIcon iconName={'happy'} assignClass={'objective-icon'}/>,
    description: "Ardent on implementing designs leaning towards good user experience, responsiveness and accessibility. Consider semantics and UX/UI principles in my work to create interesting and intuitive interfaces, essential to successful projects."
  },

  {
    title: 'Optimized products',
    icon: <PlainSvgIcon iconName={'simple'} assignClass={'objective-icon'}/>,
    description: "Create optimized and efficient applications and websites. Make simple, fast and performant websites that grant user satisfaction, which is a leading concern for businesses."
  },

  {
    title: 'Collaboration',
    icon: <PlainSvgIcon iconName={'connect'} assignClass={'objective-icon'}/>,
    description: "I encourage myself to be a team player and communicate effectively. Even with my English speaking as a third language, I endeavor to be articulate so that I can contribute to a team and achieve common goals."
  },
  {
    title: "Version control system proficiency",
    icon: <PlainSvgIcon iconName={'version'} assignClass={'objective-icon'}/>,
    description: "Intend to write readable and maintainable code and enhance proficiency with version control systems by filling up personal repositories with meaningful projects, and collaborating on code bases."
  },
  {
    title: 'Continuous professional improvement',
    icon: <PlainSvgIcon iconName={'goal'} assignClass={'objective-icon'}/>,
    description: "My current skills and knowledge is focused in the front-end. My target is to learn back-end technologies and eventually become a full-stack web developer with a more comprehensive understanding in web development."
  }
]

fredData.background = {
  p1: `I've always been fascinated by computer technology, applications and video games. I have wondered how to make life of information, create stories and art, then express it to digital users effectively. Such that, I was guided by my ambition and passion to enter the challenging yet lucrative field of web development.`,

  p2: `I learned how to code by freely browsing through the web for materials, which eventually lead to me to freeCodeCamp, Harvard CS50, and The Odin Project. I've completed web dev courses on freeCodeCamp while primary following The Odin Project course, making projects to gain web development skills and fill up my repositories to show my experience.`,
  
  p3: `I am a career shifter. Going back, I have 3+ years experience working as a Civil Engineer in a Government Agency, monitoring physical and financial accomplishments and completion of (100+) various public infrastructures projects costing more than PHP100,000,000 (1.8 million USD). Wherein, I have adapted to crunch numbers and absorb a lot of data, processing it efficiently and translating it to reports.`,
  
  p4: `In times of respite from problem solving, I cook up some fire fried rice paired with black coffee, then get hyped by Japanese rock music.`
}

fredData.contacts = {
  linkedin: {
    contactName: 'Linkedin',
    icon: <PlainSvgIcon iconName={'linkedin'}/>,
    contactInfo: 'https://www.linkedin.com/in/fred-mark-baldeviso-433138243',
  },

  github: {
    contactName: 'Github',
    icon: <PlainSvgIcon iconName={'github'}/>,
    contactInfo: 'https://github.com/makieldeviso'
  },

  email: {
    contactName: 'Gmail',
    icon: <PlainSvgIcon iconName={'mail'}/>,
    contactInfo: 'fredmark.baldeviso@gmail.com'
  }
}


export {fredData}