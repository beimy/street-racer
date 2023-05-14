//Package Imports
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SiteProvider, useSiteContext } from './utils/GlobalState';

//Pages and Components
import Nav from './components/Nav/index';
import LandingPage from './pages/Landing';
import ShowsPage from './pages/Shows';
import MerchPage from './pages/Merch';
import InfoPage from './pages/Info';
import MediaPage from './pages/Media';
import GoogleSheet from './components/GoogleSheetConnection';


function App() {

  useEffect(() => {
    document.title = 'Street Racer'
  });

  // const [state, dispatch] = useSiteContext();

  return (
    <Router>
      <SiteProvider>
        <GoogleSheet />
          <div className='w-full max-w-full overflow-x-hidden'>
              <Routes>
              <Route 
                  path='/'
                  element={<LandingPage />}
                />
                {/* <Route 
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
                /> */}

                <Route path="" element={ <Navigate to="/" /> }  />
              </Routes>
          </div>
      </SiteProvider>
    </Router>
  );
}

export default App;
