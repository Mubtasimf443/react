/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */


import { createBrowserRouter, RouterProvider } from "react-router"
import HomePage from "./pages/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    }
  ]);
  return (
    <>
      
      <Header ></Header>

      <RouterProvider router={router} />
      <Footer />
    </>
  )
}

export default App
