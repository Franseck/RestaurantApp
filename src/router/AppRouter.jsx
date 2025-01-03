import Home from "../pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

const AppRouter = () => {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    }); AOS.refresh()
  },[])


    return (
      <div>
  <BrowserRouter>
    <Navbar/>
          <Routes>
                <Route  exact path="/" element={<Home />} />
                <Route   path="/Login" element={<Login />} />
                <Route   path="/About" element={<About />} />
                <Route path="*" element={<NotFound />} />
          </Routes>
</BrowserRouter>

      </div>
    );
  };
  
  export default AppRouter;