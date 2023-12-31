import { useState } from "react";
import { iconsNavbar } from "../../assets";
import { navLinks } from "../../constants/dataGen";
import "../../styles/sidebar.scss";

function Sidebar() {
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleClickLink = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <div className="sidebar">
      <div className="logo-ctn">
        <img src={iconsNavbar.babyplacePro} alt="Logo" />
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          {navLinks.map((navLink, index) => (
            <li className="nav-item" key={navLink.id}>
              <a
                href={`#${navLink.id}`}
                className={`nav-link ${
                  index === activeLinkIndex ? "active" : ""
                }`}
                onClick={() => handleClickLink(index)}
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
