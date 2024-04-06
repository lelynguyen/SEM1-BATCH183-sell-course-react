import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";
import About from "./Components/About/About";
import Error from "./Components/Layout/Error";
import { useToggleContext } from "./Hooks/useToggle";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Faq from "./Components/Faq/Faq";
import RegLog from "./Components/RegLog/RegLog";
import Contact from "./Components/Contact/Contact";
import CourseDetails from "./Components/Courses/CourseDetails";
import toast, { Toaster } from "react-hot-toast";
import PrivateRoute from "./Components/Route/PrivateRoute";
import Checkout from "./Components/Checkout/Checkout";
import Blog from "./Components/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/courses",
          element: (
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          ),
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "*",
          element: <Error />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/checkout",
          element: (
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          ),
        },
        {
          path: "/course-details/:id",
          element: (
            <PrivateRoute>
              <CourseDetails />
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  const { mode } = useToggleContext();
  return (
    <>
      <div className={mode ? mode : ""}>
        <Toaster position="bottom-center" reverseOrder={false} />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
