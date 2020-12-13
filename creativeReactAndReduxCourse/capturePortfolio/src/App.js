//React router
import { Switch, Route, useLocation } from 'react-router-dom';
//component imports
import Nav from './components/nav.js';
import AboutUs from './pages/aboutUs.js';
import OurWork from './pages/ourWork.js';
import ContactUs from './pages/contactUs.js';
import MovieDetail from './pages/movieDetail.js';
//animation
import { AnimatePresence } from 'framer-motion';

import GlobalStyle from './components/globalStyle.js';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact" exact>
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
