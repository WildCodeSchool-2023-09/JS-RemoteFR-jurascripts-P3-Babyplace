import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { iconsNavbar } from "../../assets";
import { navLinks } from "../../constants/dataGen";
import Logout from "../../pages/structure/Logout";
import "../../styles/sidebar.scss";

function Sidebar() {
  const location = useLocation();
  const [activeLinkIndex, setActiveLinkIndex] = useState();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLinkIndex = navLinks.findIndex(
      (navLink) => navLink.url === currentPath
    );
    setActiveLinkIndex(currentLinkIndex);
  }, [location]);

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
              <Link
                to={`${navLink.url}`}
                className={`nav-link ${
                  index === activeLinkIndex ? "active" : null
                }`}
                onClick={() => handleClickLink(index)}
              >
                <img
                  src={navLink.img}
                  className="nav-link-icon"
                  alt={navLink.title}
                />
                <span className="nav-link-text">{navLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Logout />
    </div>
  );
}

export default Sidebar;
