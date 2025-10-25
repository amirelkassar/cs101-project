import React from 'react';
import BookPage, { Section, KeyPoints, Example, CodeBlock, ImageFigure, Table } from './BookPage';
import abacusImg from '../assets/images/abacus.png';
import analyticalEngineImg from '../assets/images/analytical_engine.png';
import eniacImg from '../assets/images/eniac.png';
import transistorImg from '../assets/images/transistor_computer.png';
import microprocessorImg from '../assets/images/microprocessor.png';
import ipoDiagramImg from '../assets/images/ipo_diagram.png';
import tallyMarksImg from '../assets/images/tally_marks.png';
import romanNumeralsImg from '../assets/images/roman_numerals.png';
import decimalPlaceValueImg from '../assets/images/decimal_place_value.png';
import binaryDigitsImg from '../assets/images/binary_digits.png';
import bitByteImg from '../assets/images/bit_byte.png';
import logicGatesImg from '../assets/images/logic_gates.png';
import scratchBlocksImg from '../assets/images/scratch_blocks.png';

// Simple SVG placeholders for historical devices we don't have images for yet
const ishangoBoneImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240"><rect width="100%" height="100%" fill="%23eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%233b82f6">Ishango Bone</text></svg>';
const pascalineImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240"><rect width="100%" height="100%" fill="%23fef3c7"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23b45309">Pascaline (1642)</text><rect x="60" y="140" width="360" height="16" fill="%23fde68a" stroke="%23b45309"/><circle cx="100" cy="148" r="8" fill="%23f59e0b"/><circle cx="160" cy="148" r="8" fill="%23f59e0b"/><circle cx="220" cy="148" r="8" fill="%23f59e0b"/><circle cx="280" cy="148" r="8" fill="%23f59e0b"/><circle cx="340" cy="148" r="8" fill="%23f59e0b"/></svg>';
const differenceEngineImg = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="480" height="240"><rect width="100%" height="100%" fill="%23e0f2fe"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%230256a1">Difference Engine (1822)</text><rect x="60" y="140" width="360" height="40" fill="%23bae6fd" stroke="%230256a1"/><line x1="80" y1="140" x2="80" y2="180" stroke="%230256a1"/><line x1="120" y1="140" x2="120" y2="180" stroke="%230256a1"/><line x1="160" y1="140" x2="160" y2="180" stroke="%230256a1"/><line x1="200" y1="140" x2="200" y2="180" stroke="%230256a1"/><line x1="240" y1="140" x2="240" y2="180" stroke="%230256a1"/><line x1="280" y1="140" x2="280" y2="180" stroke="%230256a1"/><line x1="320" y1="140" x2="320" y2="180" stroke="%230256a1"/><line x1="360" y1="140" x2="360" y2="180" stroke="%230256a1"/></svg>';

const imageRegistry = {
  abacus: abacusImg,
  analytical_engine: analyticalEngineImg,
  eniac: eniacImg,
  transistor_computer: transistorImg,
  microprocessor: microprocessorImg,
  ipo_diagram: ipoDiagramImg,
  tally_marks: tallyMarksImg,
  roman_numerals: romanNumeralsImg,
  decimal_place_value: decimalPlaceValueImg,
  binary_digits: binaryDigitsImg,
  bit_byte: bitByteImg,
  logic_gates: logicGatesImg,
  scratch_blocks: scratchBlocksImg,
  // Newly added placeholders
  ishango_bone: ishangoBoneImg,
  pascaline: pascalineImg,
  difference_engine: differenceEngineImg,
};

const renderElement = (el) => {
  switch (el.type) {
    case 'paragraph':
      return <p>{el.text}</p>;
    case 'heading':
      if (el.level === 3) return <h3>{el.text}</h3>;
      if (el.level === 2) return <h2>{el.text}</h2>;
      return <h4>{el.text}</h4>;
    case 'image': {
      const img = el.url || imageRegistry[el.imageKey];
      const scalePercent = el.scalePercent ?? (el.sizeReductionPercent ? 100 - el.sizeReductionPercent : 100);
      const optimized = el.optimized ?? true;
      return <ImageFigure src={img} alt={el.alt || ''} caption={el.caption} scalePercent={scalePercent} optimized={optimized} />;
    }
    case 'list': {
      const items = el.items || [];
      return (
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    case 'code':
      return <CodeBlock language={el.language || 'text'}>{el.code}</CodeBlock>;
    case 'table':
      return <Table headers={el.headers || []} rows={el.rows || []} />;
    case 'keypoints':
      return <KeyPoints points={el.points || []} />;
    case 'example':
      return (
        <Example title={el.title || ''}>
          {(el.content || []).map((child, idx) => (
            <div key={idx}>{renderElement(child)}</div>
          ))}
        </Example>
      );
    // New element types
    case 'quote':
      return (
        <blockquote className="quote">
          <p>{el.text}</p>
          {el.attribution && <cite>— {el.attribution}</cite>}
        </blockquote>
      );
    case 'callout':
      return (
        <div className={`callout ${el.style || 'info'}`}>
          {el.title && <strong>{el.title}</strong>}
          {el.text && <p>{el.text}</p>}
        </div>
      );
    case 'video':
      return (
        <video controls src={el.src} poster={el.poster} style={{ width: '100%' }} />
      );
    case 'iframe':
      return (
        <div className="embed">
          <iframe
            src={el.src}
            title={el.title || 'embed'}
            width="100%"
            height={el.height || 360}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    default:
      return null;
  }
};

const ContentPage = ({ title, content, pageNumber, totalPages }) => {
  return (
    <BookPage title={title} pageNumber={pageNumber} totalPages={totalPages}>
      {(content.sections || []).map((section, idx) => {
        if (section.type === 'keypoints') {
          return <KeyPoints key={idx} points={section.points || []} />;
        }
        if (section.type === 'example') {
          return (
            <Example key={idx} title={section.title || ''}>
              {(section.content || []).map((el, i) => (
                <div key={i}>{renderElement(el)}</div>
              ))}
            </Example>
          );
        }
        return (
          <Section key={idx} title={section.title || ''}>
            {(section.content || []).map((el, i) => (
              <div key={i}>{renderElement(el)}</div>
            ))}
          </Section>
        );
      })}
    </BookPage>
  );
};

export default ContentPage;