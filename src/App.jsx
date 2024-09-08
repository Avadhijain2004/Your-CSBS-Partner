import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RootElementForApp from "./RootElementForApp";
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Semester1 from './components/Semester1'
import Semester2 from "./components/Semester2";
import Semester3 from "./components/Semester3";
import Semester4 from "./components/Semester4";
import Semester5 from "./components/Semester5";
import Semester6 from "./components/Semester6";
import Semester7 from "./components/Semester7";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElementForApp />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/semester-1",
          element: <Semester1 />,
        },
        {
          path: "/semester-2",
          element: <Semester2 />,
        },
        {
          path: "/semester-3",
          element: <Semester3 />,
        },
        {
          path: "/semester-4",
          element: <Semester4 />,
        },
        {
          path: "/semester-5",
          element: <Semester5 />,
        },
        {
          path: "/semester-6",
          element: <Semester6 />,
        },
        {
          path: "/semester-7",
          element: <Semester7 />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
