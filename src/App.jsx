import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import TeamPage from './Pages/TeamPage';
import ServicePage from './Pages/ServicePage';
import ProjectPage from './Pages/ProjectPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/testiomonials" element={<TestimonialPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
import './css/style.css';import TestimonialPage from './Pages/TestimonialPage';
