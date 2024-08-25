import React from 'react';
import './App.css';
import ResearchPage from './components/LandingPage/ResearchPage';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ResearchPage />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
