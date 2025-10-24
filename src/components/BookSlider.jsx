import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Home } from 'lucide-react';
import './BookSlider.css';

const BookSlider = ({ pages }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    if (pageIndex !== currentPage && !isAnimating) {
      setIsAnimating(true);
      setCurrentPage(pageIndex);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  return (
    <div className="book-container">
      {/* Header */}
      <header className="book-header">
        <div className="header-content">
          <BookOpen className="book-icon" />
          <h1>CS101: Introduction to Computer Science</h1>
          <div className="page-counter">
            Page {currentPage + 1} of {pages.length}
          </div>
        </div>
      </header>

      {/* Main Book Area */}
      <div className="book-wrapper">
        <div className={`book-page ${isAnimating ? 'animating' : ''}`}>
          {pages[currentPage]}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="book-controls">
        <button 
          className="nav-btn prev-btn" 
          onClick={prevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft />
          Previous
        </button>

        <div className="page-dots">
          {pages.map((_, index) => (
            <button
              key={index}
              className={`page-dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(index)}
              title={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="nav-btn next-btn" 
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next
          <ChevronRight />
        </button>
      </div>

      {/* Table of Contents Sidebar */}
      <div className="toc-sidebar">
        <h3><Home className="toc-icon" /> Contents</h3>
        <ul className="toc-list">
          {pages.map((page, index) => (
            <li 
              key={index}
              className={`toc-item ${index === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(index)}
            >
              <span className="toc-number">{index + 1}</span>
              <span className="toc-title">{page.props.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookSlider;