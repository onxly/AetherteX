import { Avatar } from "@mui/joy";
import "../stylesheets/AdminPanel.css";

function AdminPanel() {
  return (
    <>
      <div className="avatar-container">
        <Avatar size="lg" />
        <span>Mike Hawk</span>
      </div>
    </>
  );
}

export default AdminPanel;
