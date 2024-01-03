import { useState } from "react";
import { iconsNavbar } from "../../assets";
import navLinks from "../../constants/dataGen";
import "../../styles/sidebar.scss";

function Sidebar() {
  const [activeLinkIndex] = useState(1);

  return (
    <div className="sidebar">
      <div className="logo-ctn">
        <img src={iconsNavbar.babyplacePro} alt="Logo" />
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          {navLinks.map((navLink) => (
            <li className="nav-item" key={navLink.id}>
              <a
                href={`# ${navLink.id}`}
                className={`nav-link ${
                  navLink.id === activeLinkIndex ? "active" : null
                }`}
              >
                <img
                  src={navLink.img}
                  className="nav-link-icon"
                  alt={navLink.title}
                />
                <span className="nav-link-text">{navLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
