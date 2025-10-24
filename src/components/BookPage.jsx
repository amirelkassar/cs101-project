import React from 'react';
import './BookPage.css';

const BookPage = ({ title, children, pageNumber, totalPages }) => {
  return (
    <div className="book-page-content">
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
        <div className="page-info">
          {pageNumber} / {totalPages}
        </div>
      </div>
      
      <div className="page-body">
        {children}
      </div>
      
      <div className="page-footer">
        <div className="page-decoration"></div>
      </div>
    </div>
  );
};

export const Section = ({ title, children }) => (
  <section className="content-section">
    <h2 className="section-title">{title}</h2>
    <div className="section-content">{children}</div>
  </section>
);

export const KeyPoints = ({ points }) => (
  <div className="key-points">
    <h3>Key Points:</h3>
    <ul>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export const Example = ({ title, children }) => (
  <div className="example-box">
    <h4>Example: {title}</h4>
    <div className="example-content">{children}</div>
  </div>
);

export const CodeBlock = ({ children, language = 'text' }) => (
  <div className="code-block">
    <div className="code-header">{language}</div>
    <pre><code>{children}</code></pre>
  </div>
);

export const ImageFigure = ({ src, alt, caption }) => (
  <figure className="image-figure">
    <img src={src} alt={alt} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export const Table = ({ headers, rows }) => (
  <div className="table-container">
    <table className="content-table">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BookPage;