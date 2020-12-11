//component imports
import Nav from './components/nav.js';
import AboutUs from './pages/aboutUs.js';

import GlobalStyle from './components/globalStyle.js';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
