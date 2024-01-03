import ContentTop from "../../components/structure/ContentTop";
import Sidebar from "../../components/structure/Sidebar";
import "../../styles/dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-ctn-main">
      <Sidebar />
      <ContentTop />
    </div>
  );
}

export default Dashboard;
