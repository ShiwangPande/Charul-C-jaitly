import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import React, { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import { motion, useAnimation, useInView } from "framer-motion";
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from './pages/Contact';
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

      <Router>
        <Navbar />

        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden" animate={mainControls} transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Routes>
            <Route path="/" className='home' element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            {/* <Route path="/puja" element={<Puja />} /> */}
          </Routes>
        </motion.div>
        <Footer />
      </Router>



    </div >
  );
}

export default App;
