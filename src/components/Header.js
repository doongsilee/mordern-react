import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div>
          <h1>Hyunwoo</h1>
        </div>
        <ul>
          <li>
            <Link to="/" className="nav-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="nav-item">
              Profile
            </Link>
          </li>
          {/* <li>
            <a href="/contact">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
