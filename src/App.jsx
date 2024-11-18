import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { Contact } from "./pages/Contact";
import { BookRide } from "./components/Layout/UI/BookRide";
import { Careers } from "./components/Layout/UI/Careers";
import { Blog } from "./components/Layout/UI/Blog";
import { PressPage } from "./components/Layout/UI/PressPage";
import { Safety } from "./components/Layout/UI/Safety";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: "/contact", 
        element: <Contact />,
      },
      {
        path: "/book-ride", 
        element: <BookRide />,
      },
      {
        path: "/careers",  
        element: <Careers />,
      },
      {
        path: "/blog", 
        element: <Blog />,
      },
      {
        path: "/safety",  
        element: <Safety />,
      },
      {
        path: "/press",  
        element: <PressPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
