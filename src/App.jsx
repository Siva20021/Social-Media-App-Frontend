import Layout from './Layout';
import CreatePost from './pages/CreatePost';
import Profile from './pages/Profile';
import Home from './pages/Home'
import Register from './pages/Register';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Error from './pages/Error';
import Login from './pages/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<Error/>,
    children:[
      { 
        path: "",
        element: <Home/>,
        index: true,
      },
      { 
        path: "/create",
        element: <CreatePost/>,
      },
      {
        path:"/profile",
        element:<Profile/>,
      },{
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      }
    ]
  },
  
]);


function App() {
  return(
    <RouterProvider router={router}>
    </RouterProvider>
  )
}

export default App