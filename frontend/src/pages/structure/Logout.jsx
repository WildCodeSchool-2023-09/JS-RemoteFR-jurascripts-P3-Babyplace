import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "../../styles/logout.scss";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("structureToken");
    localStorage.removeItem("parentToken");
    localStorage.removeItem("user");
    localStorage.removeItem("parent");
    localStorage.removeItem("parentId");
    localStorage.removeItem("structure");
    navigate("/");
  };

  return (
    <button className="logoutBtn" type="submit" onClick={handleLogout}>
      <MdLogout /> Se déconnecter
    </button>
  );
}

export default Logout;
