import { iconsNavbar } from "../../assets";
import "../../styles/contentTop.scss";

function ContentTop() {
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <img src={iconsNavbar.menu} alt="menu sidebar" />
        <h3 className="content-top-title">Home</h3>
      </div>
    </div>
  );
}

export default ContentTop;
