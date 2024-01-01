import { useState } from "react";
import ContentTop from "../../components/structure/ContentTop";
import Sidebar from "../../components/structure/Sidebar";
import "../../styles/dashboard.scss";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="dashboard-ctn-main">
      {isSidebarOpen && <Sidebar />}
      <ContentTop toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Dashboard;
