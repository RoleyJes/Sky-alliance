import { useEffect } from "react";
import Aos from "aos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
// import ComingSoon from "./pages/ComingSoon";
import AboutUS from "./pages/AboutUS";
import Attendees from "./pages/Attendees";
import Sponsors from "./pages/Sponsors";
import PressRelease from "./pages/PressRelease";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Ticketing from "./pages/Ticketing";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "/coming-soon", element: <ComingSoon /> },
      { path: "/about-us", element: <AboutUS /> },
      { path: "/attendees", element: <Attendees /> },
      { path: "/sponsors", element: <Sponsors /> },
      { path: "/press-release", element: <PressRelease /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/register", element: <Register /> },
      { path: "/ticketing", element: <Ticketing /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blog-post", element: <BlogPost /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "linear",
    });
  }, []);

  return <RouterProvider router={router} />;
}
