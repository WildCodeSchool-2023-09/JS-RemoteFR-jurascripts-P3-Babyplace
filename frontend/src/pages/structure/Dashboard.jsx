import { useState } from "react";
import ContentTop from "../../components/structure/ContentTop";
import Sidebar from "../../components/structure/Sidebar";
import "../../styles/dashboard.scss";
import ContentMain from "../../components/structure/ContentMain";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="dashboard-ctn-main">
      <Sidebar />
      <div className="main-content">
        <ContentTop toggleSidebar={toggleSidebar} />
        <ContentMain />
      </div>
    </div>
  );
}

export default Dashboard;
