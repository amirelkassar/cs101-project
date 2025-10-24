import React, { useState } from 'react';
import { BookOpen, Home, History, Binary, Calculator, Layers, ChevronDown, ChevronRight, Sigma, Puzzle, FunctionSquare } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ lectures, currentLecture, currentPage, onSelectLecture, onSelectPage, isOpen }) => {
  const [openLectures, setOpenLectures] = useState(() => {
    const initial = {};
    lectures.forEach((_, idx) => { initial[idx] = idx === 0; });
    return initial;
  });

  const toggleLecture = (index) => {
    setOpenLectures((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const iconForTitle = (title) => {
    switch (title) {
      case 'Cover':
        return <Home size={18} />;
      case 'History of Computers':
        return <History size={18} />;
      case 'History of Numbers':
        return <Calculator size={18} />;
      case 'Binary System':
        return <Binary size={18} />;
      case 'Algorithms':
        return <Sigma size={18} />;
      case 'Scratch Basics':
        return <Puzzle size={18} />;
      case 'Functions':
        return <FunctionSquare size={18} />;
      default:
        return <BookOpen size={18} />;
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
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
          {lectures.map((lecture, lIndex) => (
            <li key={lecture.title} className="lecture-group">
              <button
                className={`lecture-header ${currentLecture === lIndex ? 'active' : ''}`}
                onClick={() => toggleLecture(lIndex)}
              >
                <div className="nav-icon">
                  <Layers size={18} />
                </div>
                <span className="nav-text">{lecture.title}</span>
                <div className="nav-indicator">
                  {openLectures[lIndex] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              </button>

              {openLectures[lIndex] && (
                <ul className="lecture-pages">
                  {lecture.pages.map((page, pIndex) => (
                    <li key={`${lecture.title}-${page.title}`} className="nav-item">
                      <button
                        className={`nav-button ${currentLecture === lIndex && currentPage === pIndex ? 'active' : ''}`}
                        onClick={() => onSelectPage(lIndex, pIndex)}
                      >
                        <div className="nav-icon">
                          {iconForTitle(page.title)}
                        </div>
                        <span className="nav-text">{page.title}</span>
                        <div className="nav-indicator">
                          {currentLecture === lIndex && currentPage === pIndex && <div className="active-dot"></div>}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="progress-info">
          <span className="progress-text">
            Lecture {currentLecture + 1} of {lectures.length} • Page {currentPage + 1} of {lectures[currentLecture].pages.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentPage + 1) / lectures[currentLecture].pages.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;