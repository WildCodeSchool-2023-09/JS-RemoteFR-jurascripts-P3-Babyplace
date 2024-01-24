import { MdContentPaste, MdHelp, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles/profile.scss";

function Profile() {
  return (
    <div className="profile">
      <Link to="/parents/rules" className="navigation">
        <MdHelp className="icons_profile" />
        <span>Aide</span>
      </Link>
      <Link to="/parents/reservations" className="navigation">
        <MdContentPaste className="icons_profile" />
        <span>Réservations</span>
      </Link>
      <Link to="/" className="navigation">
        <MdLogout className="icons_profile" />
        <span>Déconnexion</span>
      </Link>
    </div>
  );
}

export default Profile;
