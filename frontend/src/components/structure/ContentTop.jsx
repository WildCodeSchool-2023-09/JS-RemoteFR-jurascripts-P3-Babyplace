import PropTypes from "prop-types";
import { iconsNavbar } from "../../assets";
import "../../styles/contentTop.scss";

function ContentTop({ toggleSidebar }) {
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <div className="main-content-top">
      <button
        type="button"
        className="content-top-left"
        onClick={handleToggleSidebar}
      >
        <img src={iconsNavbar.menu} alt="menu sidebar" />
        <h3 className="content-top-title">Home</h3>
      </button>
    </div>
  );
}

ContentTop.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};
export default ContentTop;
