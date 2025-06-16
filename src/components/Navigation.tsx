import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navigation() {
    return <>
        <nav className="nav">
        <Link to="/">
            <img src={logo} alt="logo" />
        </Link>
        <div className="navButton">
            <Link to="/" className='favoritesLink'>
            <p>Поиск</p>
        </Link>
        <Link to="/favorites" className='favoritesLink'>
            <span>♡</span><p> Избранное</p>
        </Link>
        </div>
      </nav>
    </>
}