import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ConnectPage from './Pages/ConnectPage.jsx';
import FeedPage from './Pages/FeedPage.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import ProfileCreation from './Pages/ProfileCreation.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);