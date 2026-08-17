import {Link} from "react-router-dom";
import { routes } from '../Routes.jsx'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">Ing. Martin Jevin</div>
      <nav className="nav">
          {routes.map((route) => (
              <Link key={route.path} to={route.path}>{route.label}</Link>
          ))}
        <button className="button" type="button"> sk/en </button>
      </nav>
    </header>
  )
}

export default Header
