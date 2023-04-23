//Package Imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider } from './utils/GlobalState';

//Pages and Components
import Nav from './components/Nav/index';
import LandingPage from './pages/Landing';
import ShowsPage from './pages/Shows';
import MerchPage from './pages/Merch';
import InfoPage from './pages/Info';
import MediaPage from './pages/Media'
import GoogleSheet from './components/GoogleSheetConnection';


function App() {

  useEffect(() => {
    document.title = 'Street Racer'
  });

  
  
  return (
    <Router>
      <SiteProvider>
        <GoogleSheet />
          <div>
            <Nav />
              <Routes>
                <Route 
                  path='/street-racer'
                  element={<LandingPage />}
                />
                <Route 
                  path='/shows'
                  element={<ShowsPage />}
                />
                <Route 
                  path='/media'
                  element={<MediaPage />}
                />
                <Route 
                  path='/merch'
                  element={<MerchPage />}
                />
                <Route 
                  path='/about'
                  element={<InfoPage />}
                />

                <Route path="" element={ <Navigate to="/street-racer" /> }  />
              </Routes>
          </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
