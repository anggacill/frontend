import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand btn btn-outline-secondary m-2">Home</Link>
          <Link to="/album" className="navbar-brand btn btn-outline-secondary m-2">Album</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Button>
                <DropdownButton as={Button} title="Dropdown" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1"><Link to="/login">Login</Link></Dropdown.Item>
                  <Dropdown.Item eventKey="2"><Link to="/register">Register</Link></Dropdown.Item>
              </DropdownButton>
              </Button>              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;