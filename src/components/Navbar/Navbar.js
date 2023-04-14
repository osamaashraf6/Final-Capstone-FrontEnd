import { NavLink } from 'react-router-dom';
import links, { logos } from './navData';
import logo from '../../images/logo.JPG';

const Navbar = () => (
  <nav>
    <img src={logo} alt="" />
    <ul>
      {links.map((link) => (
        <li key={link.id} className="link">
          <NavLink to={link.path}>
            <span>{link.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>

    <div className="logos">
      {logos.map((logo) => (
        <>{logo}</>
      ))}
    </div>
    <p>© 2023 Amanuel-Tamana-Osama</p>
  </nav>
);

export default Navbar;
