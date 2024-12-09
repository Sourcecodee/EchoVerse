// import Couple from "./Components/Couple"
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import Home from "./Pages/Home";
import AboutP from './Pages/About';
import SongsP from './Pages/SongsP';
import BlogP from './Pages/BlogP';
import ContactP from './Pages/ContactP';
import "@fontsource/playwrite-es/400.css"; // Specify weight
import "@fontsource/merienda/400.css"; // Specify weight
import "@fontsource/roboto/400.css"; // Specify weight
import DropDown from './Components/DropDown';

function App() {

  // routes created to navigate the web app
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<AboutP/>}/>
          <Route path='/songs' element={<SongsP/>}/>
          <Route path='/contact' element={<ContactP/>}/>
          <Route path='/blog' element={<BlogP/>}/>
        </Route>
      )
    )


  return (
    <>
      <div style={{fontFamily: 'merienda',position: 'relative'}}>
        {/* setting the router */}
        <div className='w-[100%] h-screen z-10' style={{position: 'absolute'}}>
            <RouterProvider router={router}/>
        </div>
        <div className='w-[100%] h-screen' style={{position: 'absolute'}}>
            <DropDown/>
        </div>
      </div>
    </>
  )
}

export default App
