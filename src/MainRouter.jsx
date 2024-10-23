

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Quiz/Design/Navbar';
import Home from './components/Home'; // Creating this component
import Quiz_Display from './components/Quiz_Display'; // my Quiz_Display component


const MainRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz_Display />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
