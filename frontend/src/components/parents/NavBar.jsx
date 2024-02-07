import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { IoFolderOpen, IoPerson, IoSearch } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import "../../styles/navbar.scss";

function NavBar() {
  const [profile, setProfile] = useState({ sub: 0 });
  useEffect(() => {
    const token = localStorage.getItem("parentToken");
    if (token) {
      setProfile(jwtDecode(token));
    }
  }, []);

  const navbar = [
    {
      id: 2,
      icons: <IoPerson className="icons" />,
      link: `/parents/profile/${profile.sub}`,
    },
    {
      id: 3,
      icons: <IoSearch className="icons" />,
      link: `/parents/creche`,
    },
    {
      id: 4,
      icons: <IoFolderOpen className="icons" />,
      link: `/parents/folders/${profile.sub}`,
    },
  ];

  const location = useLocation();
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const currentLinkIndex = navbar.findIndex(
      (navLink) => navLink.link === currentPath
    );
    setActiveLinkIndex(currentLinkIndex);
  }, [location, navbar]);

  return (
    <nav className="navbar_parents">
      {navbar.map((icons, index) => (
        <Link
          to={icons.link}
          key={icons.id}
          className={` ${index === activeLinkIndex ? "active" : ""}`}
          onClick={() => setActiveLinkIndex(index)}
        >
          {icons.icons}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
