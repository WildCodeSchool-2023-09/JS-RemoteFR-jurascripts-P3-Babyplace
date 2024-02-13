import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { MdContentPaste, MdHelp, MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/profile.scss";

function Profile() {
  const [profile, setProfile] = useState({ sub: 0 });
  useEffect(() => {
    const token = localStorage.getItem("parentToken");
    if (token) {
      setProfile(jwtDecode(token));
    }
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("parentToken");
    localStorage.removeItem("user");
    localStorage.removeItem("parent");
    localStorage.removeItem("parentId");
    navigate("/");
  };
  return (
    <section className="profile">
      <Link to="/parents/rules" className="navigation">
        <MdHelp className="icons_profile" />
        <span>Aide</span>
      </Link>
      <Link
        to={`/parents/profile/${profile.sub}/reservations`}
        className="navigation"
      >
        <MdContentPaste className="icons_profile" />
        <span>Réservations</span>
      </Link>
      <div className="navigation" onClick={handleLogout} aria-hidden>
        <MdLogout className="icons_profile" />
        <span>Déconnexion</span>
      </div>
    </section>
  );
}

export default Profile;
