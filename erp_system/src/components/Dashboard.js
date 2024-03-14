import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <h3>Total Products</h3>
          <p>100</p>
        </div>
        <div className="metric">
          <h3>Total Orders</h3>
          <p>50</p>
        </div>
      </div>
      <div className="actions">
        <Link to="/products">Manage Products</Link>
        <Link to="/orders">Manage Orders</Link>
      </div>
    </div>
  );
};

export default Dashboard;
