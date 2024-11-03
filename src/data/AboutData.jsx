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

fredData.greetings = 'Creates responsive, accessible and efficient websites and web applications. Focuses in building interactive and dynamic apps using React.';


export {fredData}