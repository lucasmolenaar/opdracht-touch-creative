import React, { useState } from 'react';

import Container from './components/Container/Container';
import Header from './components/Header/Header';
import SiteList from './components/SiteList/SiteList';

import './App.css';

function App() {
  const [totalSites, setTotalSites] = useState(0);
  const [offlineSites, setOfflineSites] = useState(0);
  const [onlineSites, setOnlineSites] = useState(0);
  const [unsafeSites, setUnsafeSites] = useState('');

  return (
    <div className="App">
        <Container>
          <Header 
            totalSites={totalSites}
            onlineSites={onlineSites}
            offlineSites={offlineSites}
            unsafeSites={unsafeSites}
          />

          <SiteList 
            setTotalSites={setTotalSites}
            setOfflineSites={setOfflineSites}
            setOnlineSites={setOnlineSites}
            setUnsafeSites={setUnsafeSites}
          />
        </Container>
        
    </div>
  );
}

export default App;
