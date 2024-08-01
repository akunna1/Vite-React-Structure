// Setting up the routing for the application.
// Importing the Main component and other pages to route to

import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import About from './pages/about';
import Contact from './pages/contact';
import Flutter from './pages/flutter';
import Geospatial from './pages/geospatial';
import Intro from './pages/intro';
import Ios from './pages/ios';
import Mining from './pages/mining';
import Native from './pages/native';
import Predictive from './pages/predictive';
import Privacy from './pages/privacy';
import Scraping from './pages/scraping';
import Services from './pages/services';
import Web from './pages/web';
import Webgis from './pages/webgis';
import ScrollToTop from './components/scroll'; // the only component here

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} /> {/* Home page route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flutter" element={<Flutter />} />
        <Route path="/geospatial" element={<Geospatial />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/ios" element={<Ios />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/native" element={<Native />} />
        <Route path="/predictive" element={<Predictive />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/scraping" element={<Scraping />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web" element={<Web />} />
        <Route path="/webgis" element={<Webgis />} />
      </Routes>
    </>
  );
}

export default App;
