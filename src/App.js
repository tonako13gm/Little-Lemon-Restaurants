
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import AboutPage from "./components/AboutPage"
import Home from "./components/Home"
import Booking from "./components/FormikaAndYup"

function App() {
  const router = createBrowserRouter([
    {
      // parent route component
      element: 
        <Layout />,
      // child route components
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App

