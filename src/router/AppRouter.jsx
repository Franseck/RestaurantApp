import Home from "../pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
      <div>

  <BrowserRouter>
    
          <Routes>
                <Route  exact path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
          </Routes>
</BrowserRouter>

      </div>
    );
  };
  
  export default AppRouter;