import shoppingCartPreview1 from '../assets/projects-preview/shopping-cart-1.png';
import shoppingCartPreview2 from '../assets/projects-preview/shopping-cart-2.png';
import shoppingCartPreview3 from '../assets/projects-preview/shopping-cart-3.png';
import memoryCardPreview from '../assets/projects-preview/memory-card.png';
import cvApplicationPreview from '../assets/projects-preview/cv-application.png';
import battleshipPreview from '../assets/projects-preview/battleship.png';
import weatherAppPreview from '../assets/projects-preview/weather-app.png';
import todoListPreview from '../assets/projects-preview/todo-list.png';
import restaurantPagePreview from '../assets/projects-preview/restaurant-page.png';
import ticTacToePreview from '../assets/projects-preview/tic-tac-toe.png';
import libraryPreview from '../assets/projects-preview/library.png';
import adminDashboardPreview from '../assets/projects-preview/admin-dashboard.png';
import signUpFormPreview from '../assets/projects-preview/sign-up-form.png';
import calculatorPreview from '../assets/projects-preview/calculator.png';
import etchASketchPreview from '../assets/projects-preview/etch-a-sketch.png';
import rockPaperScissorsPreview from '../assets/projects-preview/rock-paper-scissors.png';


const projectsArr = [];
class Project {
  constructor(id, title, previewImg, description, codeLink, liveLink, projectType) {
    this.id = id;
    this.title = title;
    this.previewImg = previewImg;
    this.description = description;
    this.codeLink = codeLink;
    this.liveLink = liveLink;
    this.projectType = projectType;
    projectsArr.push(this)
  }
}

const shoppingCart = new Project(
  1,
  'Shopping Cart',
  [shoppingCartPreview1, shoppingCartPreview2, shoppingCartPreview3],
  'A shopping cart/ store website project titled A-TIER physical games store. This portfolio project shows a shopping website with a homepage banner, a shopping window and cart functionality feature. Created with React emphasizing client-side routing with React Router.',
  'https://github.com/makieldeviso/shopping-cart',
  'https://a-tier.netlify.app/',
  'major'
)

const memoryCard = new Project(
  2,
  'Memory Card Game',
  [memoryCardPreview],
  'A memory card game with a pokemon theme. This project emphasizes state management while fetching and utilizing data from external API.',
  'https://github.com/makieldeviso/memory-card-game',
  'https://memory-card-game-4cx.pages.dev/',
  'major'
)

const cvApplication = new Project(
  3,
  'CV Application',
  [cvApplicationPreview],
  'A Curriculum Vitae maker web app. Create a CV using a template by filling up form input fields.',
  'https://github.com/makieldeviso/CV-Application',
  'https://cv-application-1lb.pages.dev/',
  'major'
)

const battleship = new Project(
  4,
  'Battleship',
  [battleshipPreview],
  'A battleship game that runs on the browser',
  'https://github.com/makieldeviso/battleship',
  'https://makieldeviso.github.io/battleship/',
  'major'
)

const weatherApp = new Project(
  5,
  'Weather App',
  [weatherAppPreview],
  'Weather App using free tier WeatherAPI. Enter location and check its real-time weather and forecast information in a responsive app display.',
  'https://github.com/makieldeviso/weather-app',
  'https://makieldeviso.github.io/weather-app/',
  'major'
)

const todoList = new Project(
  6,
  'Todo List',
  [todoListPreview],
  'A Todo List App that can create events with tasks, and projects that can store events. Can track and filter schedule/ deadline of affairs and todo level of priority.',
  'https://github.com/makieldeviso/todo-list',
  'https://makieldeviso.github.io/todo-list/',
  'major'
)

const restaurantPage = new Project(
  7,
  'Restaurant Page',
  [restaurantPagePreview],
  'Restaurant page for Heartbreak Pub portfolio project.',
  'https://github.com/makieldeviso/restaurant',
  'https://makieldeviso.github.io/restaurant/',
  'major'
)

const tictactoe = new Project(
  8,
  'Tic-tac-toe',
  [ticTacToePreview],
  'A tic-tac-toe game featuring 3 modes, a two-player versus mode, a computer opponent with randomized moves and an unbeatable computer opponent equipped with minimax algorithm.',
  'https://github.com/makieldeviso/tic-tac-toe',
  'https://makieldeviso.github.io/tic-tac-toe/',
  'major'
)

const library = new Project (
  9,
  'Library',
 [ libraryPreview],
  'A library web app portfolio project titled myReadList that can add book information, then displays to a digital catalog.',
  'https://github.com/makieldeviso/library',
  'https://makieldeviso.github.io/library/',
  'major'
)

const adminDashboard = new Project (
  10,
  'Admin Dashboard',
  [adminDashboardPreview],
  'An admin dashboard for a company named Trash Panda Co. portfolio project. Exemplify web layout design using CSS, emphasizing use of Flex and Grid display rules.',
  'https://github.com/makieldeviso/admin-dashboard',
  'https://makieldeviso.github.io/admin-dashboard/',
  'minor'
)

const signUpForm = new Project (
  11,
  'Sign-up Form',
  [signUpFormPreview],
  'A service sign up for Waryur Helmets, a made up shop that sells biker helmets.',
  'https://github.com/makieldeviso/sign-up-form',
  'https://makieldeviso.github.io/sign-up-form/',
  'minor'
)

const calculator = new Project (
  12,
  'Calculator',
  [calculatorPreview],
  'A calculator web app that solves basic math operations. Built with interactive display and button mapping.',
  'https://github.com/makieldeviso/calculator',
  'https://makieldeviso.github.io/calculator/',
  'minor'
)

const etchASketch = new Project (
  13,
  'Etch-a-sketch',
  [etchASketchPreview],
  'Pixel Slate, an etch-a-sketch web app. Draw art in a pixel canvas.',
  'https://github.com/makieldeviso/sketch',
  'https://makieldeviso.github.io/sketch/',
  'minor'
)

const rockPaperScissors = new Project (
  14,
  'Rock Paper Scissors',
  [rockPaperScissorsPreview],
  'A rock paper scissor game with a cute and refreshing Japanese theme.',
  'https://github.com/makieldeviso/rock-paper-scissor',
  'https://makieldeviso.github.io/rock-paper-scissor/',
  'minor'
)

export default projectsArr