import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsSection from './components/EventsSection';
import TeamMembersSection from './components/TeamMembersSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col bg-gradient-cyberpunk">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <EventsSection />
                <TeamMembersSection />
              </>
            } />
            <Route path="/events" element={<EventsSection />} />
            <Route path="/team" element={<TeamMembersSection />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
