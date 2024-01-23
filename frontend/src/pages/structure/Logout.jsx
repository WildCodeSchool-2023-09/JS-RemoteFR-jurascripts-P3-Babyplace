import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("structureToken");
    navigate("/");
  };

  return (
    <button className="logoutBtn" type="submit" onClick={handleLogout}>
      Se déconnecter
    </button>
  );
}

export default Logout;
