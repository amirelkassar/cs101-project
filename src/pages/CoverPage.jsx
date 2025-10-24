import React from 'react';
import { BookOpen, Code, Cpu, Lightbulb } from 'lucide-react';
import './CoverPage.css';

const CoverPage = ({ title = "CS101: Introduction to Computer Science" }) => {
  return (
    <div className="cover-page">
      <div className="cover-content">
        <div className="cover-header">
          <BookOpen className="cover-icon" size={64} />
          <h1 className="cover-title">{title}</h1>
          <p className="cover-subtitle">A Comprehensive Guide to Computing Fundamentals</p>
        </div>
        
        <div className="cover-features">
          <div className="feature-item">
            <Code className="feature-icon" />
            <h3>Programming Concepts</h3>
            <p>Learn the basics of algorithms and problem-solving</p>
          </div>
          
          <div className="feature-item">
            <Cpu className="feature-icon" />
            <h3>Computer Systems</h3>
            <p>Understand how computers work from the ground up</p>
          </div>
          
          <div className="feature-item">
            <Lightbulb className="feature-icon" />
            <h3>Practical Examples</h3>
            <p>Hands-on learning with real-world applications</p>
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
            <span className="topic-tag">Functions</span>
          </div>
        </div>
        
        <div className="cover-footer">
          <p>Interactive Learning Experience</p>
          <div className="navigation-hint">
            <span>Use arrow keys or navigation buttons to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;