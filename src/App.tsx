import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import AboutP from "./Pages/About";
import SongsP from "./Pages/SongsP";
import BlogP from "./Pages/BlogP";
import ContactP from "./Pages/ContactP";
import "@fontsource/playwrite-es/400.css"; // Specify weight
import "@fontsource/merienda/400.css"; // Specify weight
import "@fontsource/roboto/400.css"; // Specify weight
import DropDown from "./Components/DropDown";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { AuthContext } from "./Context/authContext";

function App() {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const dropDownRef = useRef(null);

  // GSAP dropdwon animation
  if (dropDown) {
    gsap.to(dropDownRef.current, {
      duration: 1,
      opacity: 1,
      height: "100%",
      z: 20,
    });
  } else {
    gsap.to(dropDownRef.current, { duration: 1, opacity: 0, z: 0 });
  }

  // routes created to navigate the web app
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutP />} />
        <Route path="/songs" element={<SongsP />} />
        <Route path="/contact" element={<ContactP />} />
        <Route path="/blog" element={<BlogP />} />
      </Route>
    )
  );

  return (
    <>
      <AuthContext.Provider value={{ setDropDown, dropDown }}>
        <div className="w-[100%] h-[100%]" style={{ fontFamily: "merienda"}}>
          {/* setting the router */}
          <div className="w-[100%] h-[100%] bg-yellow-700" style={{ position: "absolute"}}>
            <RouterProvider router={router} />
          </div>

          {/* I encountered conflict(it freezes the app) with dropdown until i set display to condtionally show when dropdown is true*/}
          <div
            ref={dropDownRef}
            className="w-[100%] h-screen"
            style={{
              position: "absolute",
              zIndex: 20,
              opacity: 0,
              display: dropDown ? "block" : "none",
            }}
          >
            <DropDown />
          </div>
        </div>
      </AuthContext.Provider>
    </>
  );
}

export default App;
