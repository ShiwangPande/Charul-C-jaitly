import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import { motion, useAnimation, useInView } from "framer-motion"
// import required modules
function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div className="App">
      <Navbar />
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className='home'>
          <Home />
        </div>
      </motion.div>
      <Footer />

    </div >
  );
}

export default App;
