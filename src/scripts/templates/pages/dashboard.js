import sidebar from "../sidebar";

const Dashboard = {
  async renderPage() {
    return `<div class="dashboard">
    ${sidebar}
    <main class="main-content">
      <header class="header">
        <h2>Dashboard Overview</h2>
        <div class="user-info">
          <img src="avatar.png" alt="User Avatar" class="avatar">
          <span class="username">John Doe</span>
        </div>
      </header>
      
      
    </main>
  </div>`;
  },
  async afterRenderPage() {},
};

export default Dashboard;
