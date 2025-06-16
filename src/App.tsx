import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import PhotoDetail from './pages/PhotoDetail';
import './App.css';
import Favorites from './pages/Favorites';
// import Navigation from './components/Navigation';

export default function App() {
  return (
    <Router>
      {/* <Navigation/> */}
      {/* <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/favorites" className='favoritesLink'><span>♡</span></Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </Router>
  );
}
