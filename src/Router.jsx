import { createBrowserRouter } from "react-router-dom";

import App from "./components/App";

const routerArray = [
  {
    path: '/',
    element: <App/>,
    children: [
      {
        
      }
    ]
  }
]

const browserRouter = createBrowserRouter(routerArray);

export {routerArray, browserRouter}