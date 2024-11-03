import profilePicture1 from '../assets/profile-picture.jpg';

class ProfileData {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const fredData = new ProfileData('Fred Mark', 'Baldeviso');
fredData.profilePicture = [profilePicture1];
fredData.title = 'Front-end Web Developer';
fredData.techStack = {
  frontEnd: ['HTML', 'CSS', 'JavaScript', 'React']
};

fredData.greetings = 'Creates responsive, accessible and efficient websites and web applications. Focuses in building interactive and dynamic apps using JavaScript and React.';


fredData.objectives = {
  intro: {
    title: 'Introduction',
    description: "I'm Fred Mark Baldeviso, a budding web developer from Leyte, Philippines. I specialize in crafting streamlined digital experiences in the web. And aims to create websites that follows established trends for better user experience while still exuding creativity to users."
  },

  goal1: {
    title: 'User-centric design',
    description: "I'm passionate on improving my sense in design and leaning towards good user experience, responsiveness and accessibility. I consider UX/UI principles in my work to create interesting and intuitive interfaces, essential to successful projects."
    },
  goal2:{
    title: 'Simple and fast',
    description: 'Part of my objective is to create optimized and efficient websites. Making simple, fast and performant website grants user satisfaction which is a leading concern for businesses.'
    },
  goal3:{
    title: 'Collaborative',
    description: "I encourage myself to be a team player and communicate effectively. Even with my average English speaking as a third language, I endevor to be forthright so that I can achieve goals. Meanwhile, I intend to write readable and maintanable code bases, as well as enhance proficiency with version controll systems."
    },
  goal4:{
    title: 'Longterm goals',
    description: 'My current skills and knowledge is focused in the front-end. My target is to learn back-end technologies and eventually become a Full-stack web developer with a more comprehensive understanding of web development.'
    }
}





export {fredData}