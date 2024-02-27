
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./components/root/Layout"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Pricing from "./pages/Pricing"
import Features from "./pages/Features"
import Work2 from "./pages/Work2"
import Case from "./pages/Case"
import Readblog from "./pages/Readblog"
import Privacy from "./pages/Privacy"
import Contact from "./pages/Contact"
const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/features" element={<Features/>}></Route>
    <Route path="/work" element={<Work2/>}></Route>
    <Route path="/case" element={<Case/>}></Route>
    <Route path="/readblog" element={<Readblog/>}></Route>
    <Route path="/policy" element={<Privacy/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Route>
))


function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
