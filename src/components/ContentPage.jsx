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
      const img = imageRegistry[el.imageKey];
      return <ImageFigure src={img} alt={el.alt || ''} caption={el.caption} />;
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