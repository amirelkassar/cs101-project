import React from 'react';
import { BookOpen, Home, History, Binary, Calculator } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ currentPage, onPageChange, pages }) => {
  const navigationItems = [
    { id: 0, title: 'Cover', icon: Home, component: 'CoverPage' },
    { id: 1, title: 'History of Computers', icon: History, component: 'HistoryOfComputers' },
    { id: 2, title: 'History of Numbers', icon: Calculator, component: 'HistoryOfNumbers' },
    { id: 3, title: 'Binary System', icon: Binary, component: 'BinarySystem' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="course-icon">
          <BookOpen size={32} />
        </div>
        <div className="course-info">
          <h1 className="course-title">CS101</h1>
          <p className="course-subtitle">Computer Science Fundamentals</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        <h3 className="nav-title">Course Content</h3>
        <ul className="nav-list">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-button ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => onPageChange(item.id)}
                >
                  <div className="nav-icon">
                    <IconComponent size={20} />
                  </div>
                  <span className="nav-text">{item.title}</span>
                  <div className="nav-indicator">
                    {currentPage === item.id && <div className="active-dot"></div>}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="progress-info">
          <span className="progress-text">
            Page {currentPage + 1} of {pages.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;