import './App.css';
import Userdata from './context/Userdata';
import Customizepage from './components/customizepage/Customizepage';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './components/login/Login'
import Register from './components/register/Register'
import Showpage from './components/showpage/Showpage';
import Errormessage from './components/errormessage/Errormessage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Customizepage/>)
  },
  {
    path: "/user/:id",
    element: (<Showpage/>)
  },
  {
    path:"/login",
    element:(<Login/>)
  },
  {
    path:"/register",
    element:(<Register/>)
  }
])


function App() {
  return (
    <>
      <Userdata>
        <Errormessage/>
        <RouterProvider router={router} />
      </Userdata>
    </>
  );
}

export default App;
