import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import AllRoutes from "./router/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";
import { ToastContainer } from "react-toastify";
import './style.css'

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 100,
    });
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="105, 87, 175"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <AllRoutes />
      {/* End contact */}
      <ToastContainer />
      {/* Same as */}
    </>
  );
};

export default App;
