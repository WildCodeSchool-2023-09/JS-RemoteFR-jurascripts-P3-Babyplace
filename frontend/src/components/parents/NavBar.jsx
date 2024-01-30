import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { IoFolderOpen, IoPerson, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
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

  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleActive = (e) => {
    setActiveLinkIndex(e);
  };
  return (
    <nav className="navbar_parents">
      {navbar.map((icons) => (
        <Link
          to={icons.link}
          key={icons.id}
          className={` ${icons.id === activeLinkIndex ? "active" : ""}`}
          onClick={() => handleActive(icons.id)}
        >
          {icons.icons}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
