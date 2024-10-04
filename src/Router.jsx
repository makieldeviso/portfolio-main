import { createBrowserRouter } from "react-router-dom";

import App from "./components/App";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const routerArray = [
  {
    path: '/',
    element: <App/>,
  }
]

const browserRouter = createBrowserRouter(routerArray);

export {routerArray, browserRouter}