import React from 'react';
import { BookOpen, Code, Cpu, Lightbulb, Sigma, Braces } from 'lucide-react';
import './CoverPage.css';

const CoverPage = ({ title = "CS101: Introduction to Computer Science" }) => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <div className="cover-header">
          <BookOpen className="cover-icon" size={64} />
          <h1 className="cover-title">{title}</h1>
          <p className="cover-subtitle">Foundations of Computer Science: Math, Logic, and Programming</p>
        </div>
        
        <div className="cover-features">
          <div className="feature-item">
            <Braces className="feature-icon" />
            <h3>Programming Languages</h3>
            <p>Learn with Scratch first, then explore Python</p>
          </div>
          
          <div className="feature-item">
            <Sigma className="feature-icon" />
            <h3>Discrete Mathematics</h3>
            <p>Sets, logic, number systems, and combinatorics</p>
          </div>
          
          <div className="feature-item">
            <Cpu className="feature-icon" />
            <h3>Computer Systems</h3>
            <p>Binary, data representation, gates, and architecture</p>
          </div>
        </div>
        
        <div className="cover-topics">
          <h3>What You'll Learn:</h3>
          <div className="topics-grid">
            <span className="topic-tag">History of Computing</span>
            <span className="topic-tag">Number Systems</span>
            <span className="topic-tag">Binary & ASCII</span>
            <span className="topic-tag">Data Representation</span>
            <span className="topic-tag">Algorithms</span>
            <span className="topic-tag">Problem Solving</span>
            <span className="topic-tag">Scratch Programming</span>
            <span className="topic-tag">Python Basics</span>
            <span className="topic-tag">Logic & Sets</span>
            <span className="topic-tag">Functions</span>
            <span className="topic-tag">Data Structures</span>
          </div>
        </div>
        
        <div className="cover-footer">
          <p>Interactive Learning Experience</p>
          <div className="navigation-hint">
            <span>Select a lecture, then choose pages to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;