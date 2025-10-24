import React from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import './Header.css';

const Header = ({ 
  currentPage, 
  totalPages, 
  onPrevPage, 
  onNextPage, 
  pageTitle,
  lectureTitle,
  onToggleSidebar 
}) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <button 
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="page-info">
          <div className="breadcrumb">
            <span className="lecture-title">{lectureTitle}</span>
            <span className="breadcrumb-sep">›</span>
            <h2 className="page-title">{pageTitle}</h2>
          </div>
          <span className="page-counter">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>

      <div className="header-controls">
        <button
          className="nav-btn prev-btn"
          onClick={onPrevPage}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>
        
        <button
          className="nav-btn next-btn"
          onClick={onNextPage}
          disabled={currentPage === totalPages - 1}
          aria-label="Next page"
        >
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;