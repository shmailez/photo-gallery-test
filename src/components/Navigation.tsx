import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

export default function Navigation() {
    return <>
        <nav className="nav">
        <Link to="/">
            <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="navButton">
            <Link to="/" className='searchLink'>
                
            </Link>
            <Link to="/favorites" className='favoritesLink'>
            </Link>
        </div>
      </nav>
    </>
}