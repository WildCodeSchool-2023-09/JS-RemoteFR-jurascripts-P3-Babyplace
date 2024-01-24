import { MdContentPaste, MdHelp, MdLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/profile.scss";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("parentToken");
    navigate("/");
  };
  return (
    <section className="profile">
      <Link to="/parents/rules" className="navigation">
        <MdHelp className="icons_profile" />
        <span>Aide</span>
      </Link>
      <Link to="/parents/profile/reservations" className="navigation">
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
