import profilePicture1 from '../assets/profile-pictures/profile-1.jpg';
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
  frontEnd: ['HTML', 'CSS', 'JavaScript', 'React']
};

fredData.tagline = 'Creates responsive, accessible and efficient websites and web applications. Focuses in building interactive and dynamic apps with JavaScript and React.';

fredData.introduction = "I'm Fred Mark Baldeviso, a budding web developer from Leyte, Philippines. I specialize in crafting streamlined digital experiences in the web. And aims to create websites that follows established trends for better user experience while still exuding creativity and style."


fredData.objectives = {
  goal1: {
    title: 'User-centric Design',
    icon: <PlainSvgIcon iconName={'happy'} assignClass={'objective-icon'}/>,
    description: "I'm passionate on improving my sense in design and leaning towards good user experience, responsiveness and accessibility. I consider UX/UI principles in my work to create interesting and intuitive interfaces, essential to successful projects."
    },
  goal2:{
    title: 'Simple and Fast Websites',
    icon: <PlainSvgIcon iconName={'fast'} assignClass={'objective-icon'}/>,
    description: 'Part of my objective is to create optimized and efficient websites. Making simple, fast and performant websites that grant user satisfaction, which is a leading concern for businesses.'
    },
  goal3:{
    title: 'Collaboration',
    icon: <PlainSvgIcon iconName={'connect'} assignClass={'objective-icon'}/>,
    description: "I encourage myself to be a team player and communicate effectively. Even with my average English speaking as a third language, I endeavor to be articulate so that I can achieve goals. Meanwhile, I intend to write readable and maintainable code bases, as well as enhance proficiency with version control systems."
    },
  goal4:{
    title: 'Long term goals',
    icon: <PlainSvgIcon iconName={'goal'} assignClass={'objective-icon'}/>,
    description: 'My current skills and knowledge is focused in the front-end. My target is to learn back-end technologies and eventually become a Full-stack web developer with a more comprehensive understanding in web development.'
    }
}

fredData.background = {
  p1: `I've always been fascinated by computer technology, applications and video games. I have wondered how to make life of information, create stories and art, then express it to digital users effectively. Such that, I was guided by my ambition and passion to enter the challenging yet lucrative field of tech.`,

  p2: `I learned how to code by freely browsing through the web for materials, which eventually lead to me to freeCodeCamp, Harvard CS50, and The Odin Project. I've completed web dev courses on freeCodeCamp while primary following The Odin Project course, making projects to gain web development skills and fill up my repositories to show my experience.`,
  
  p3: `I am career shifter. Going back, I have 3+ years experience working as a Civil Engineer in a Government Agency, monitoring physical and financial accomplishments and completion of (100+) various public infrastructures projects costing more than PHP100,000,000 (1.8 million USD). Wherein, I have adapted to crunch numbers and absorb a lot of data, processing it efficiently and translating it to reports.`,
  
  p4: `In times of respite from problem solving, I cook up some fire fried rice paired with black coffee, then get hyped by Japanese rock music.`
}

fredData.contacts = {
  linkedin: {
    contactName: 'Linkedin',
    contactInfo: 'https://www.linkedin.com/in/fred-mark-baldeviso-433138243',
  },

  github: {
    contactName: 'Github',
    contactInfo: 'https://github.com/makieldeviso'
  },

  email: {
    contactName: 'Gmail',
    contactInfo: 'fredmark.baldeviso@gmail.com'
  }
}


export {fredData}