// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="navbar">
    <li className="nav-item">
      <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default Header
