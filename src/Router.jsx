import { createBrowserRouter } from "react-router-dom";

import App from "./components/App";

const routerArray = [
  {
    path: '/',
    element: <App/>
  }
]

const browserRouter = createBrowserRouter(routerArray);

export {routerArray, browserRouter}