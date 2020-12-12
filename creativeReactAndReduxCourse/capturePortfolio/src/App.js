//React router
import { Switch, Route } from 'react-router-dom';
//component imports
import Nav from './components/nav.js';
import AboutUs from './pages/aboutUs.js';
import OurWork from './pages/ourWork.js';
import ContactUs from './pages/contactUs.js';
import MovieDetail from './pages/movieDetail.js';

import GlobalStyle from './components/globalStyle.js';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
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
    </div>
  );
}

export default App;
