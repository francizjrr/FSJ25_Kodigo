import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import {Library} from './pages/Library';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
