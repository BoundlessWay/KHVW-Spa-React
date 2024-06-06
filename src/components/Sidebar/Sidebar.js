import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                Todo App
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/myday">My Day</Link></li>
                <li><Link to="/next7days">Next 7 Days</Link></li>
                <li><Link to="/alltasks">All Tasks</Link></li>
                <li><Link to="/mylist">My List</Link></li>
                <li><Link to="/tags">Tags</Link></li>
            </ul>
            <div className="sidebar-footer">
                <p>&copy; 2024 Any.do Clone</p>
            </div>
        </div>

    );
};

export default Sidebar;
