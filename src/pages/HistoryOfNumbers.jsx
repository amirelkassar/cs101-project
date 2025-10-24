import React from 'react';
import BookPage, { Section, KeyPoints, Example, ImageFigure } from '../components/BookPage';
import tallyMarksImg from '../assets/images/tally_marks.png';
import romanNumeralsImg from '../assets/images/roman_numerals.png';
import decimalPlaceValueImg from '../assets/images/decimal_place_value.png';

const HistoryOfNumbers = () => {
  return (
    <BookPage title="History of Numbers" pageNumber={2} totalPages={10}>
      <Section title="Why Do We Need Numbers?">
        <p>
          Numbers are fundamental to human civilization. They allow us to count, measure, 
          trade, and communicate quantities. The development of number systems directly 
          influenced the advancement of mathematics, science, and eventually, computing.
        </p>
      </Section>

      <Section title="Evolution of Number Systems">
        <h3>1. Tally Marks (Prehistoric)</h3>
        
        <ImageFigure 
          src={tallyMarksImg} 
          alt="Tally marks example" 
          caption="Tally marks: the earliest form of counting, still used today"
        />
        
        <p>
          The earliest form of counting used tally marks - simple lines or notches. 
          Archaeological evidence shows humans used tally systems over 40,000 years ago. 
          Each mark represented one item, making it easy to count but difficult for large numbers.
        </p>
        
        <Example title="Tally Mark Counting">
          <p>Counting sheep: ||||  ||||  |||  = 13 sheep</p>
          <p>Problem: What if you need to count 1,000 sheep? You'd need 1,000 marks!</p>
        </Example>

        <h3>2. Roman Numerals (753 BC - 1400 AD)</h3>
        
        <ImageFigure 
          src={romanNumeralsImg} 
          alt="Roman numerals examples" 
          caption="Roman numerals used letters to represent different values"
        />
        
        <p>
          Romans developed a system using letters to represent numbers: I=1, V=5, X=10, 
          L=50, C=100, D=500, M=1000. This was more compact than tally marks but still 
          difficult for complex calculations.
        </p>
        
        <Example title="Roman Numeral Examples">
          <p>IV = 4 (5-1)</p>
          <p>IX = 9 (10-1)</p>
          <p>MCMLIV = 1954 (1000+900+50+4)</p>
          <p>Try multiplying XVII × XXIII in Roman numerals - it's very difficult!</p>
        </Example>

        <h3>3. Decimal Place Value System (500 AD - Present)</h3>
        
        <ImageFigure 
          src={decimalPlaceValueImg} 
          alt="Decimal place value diagram" 
          caption="Decimal system: each position represents a power of 10"
        />
        
        <p>
          The decimal (base-10) system, developed in India around 500 AD, revolutionized 
          mathematics. It uses ten digits (0-9) and positional notation, where the 
          position of a digit determines its value.
        </p>
        
        <p>
          The key innovation was the concept of zero and place value. In the number 305:
        </p>
        <ul>
          <li>3 is in the hundreds place (3 × 100 = 300)</li>
          <li>0 is in the tens place (0 × 10 = 0)</li>
          <li>5 is in the ones place (5 × 1 = 5)</li>
          <li>Total: 300 + 0 + 5 = 305</li>
        </ul>
      </Section>

      <Section title="Why Decimal System?">
        <p>
          Humans naturally developed a base-10 system because we have 10 fingers. 
          This made counting and basic arithmetic intuitive. However, computers don't 
          have fingers - they use electricity, which led to the binary (base-2) system.
        </p>
        
        <Example title="Different Bases">
          <p><strong>Base-10 (Decimal):</strong> Uses digits 0-9</p>
          <p><strong>Base-2 (Binary):</strong> Uses digits 0-1 (perfect for computers: OFF/ON)</p>
          <p><strong>Base-16 (Hexadecimal):</strong> Uses 0-9, A-F (common in programming)</p>
        </Example>
      </Section>

      <KeyPoints points={[
        "Number systems evolved from tally marks to sophisticated positional notation",
        "Roman numerals were compact but difficult for calculations",
        "Decimal system uses place value: each position represents a power of 10",
        "The invention of zero was crucial for modern mathematics",
        "Different bases serve different purposes: decimal for humans, binary for computers"
      ]} />

      <Section title="Connection to Computing">
        <p>
          Understanding number systems is crucial for computer science because:
        </p>
        <ul>
          <li>Computers use binary (base-2) internally</li>
          <li>Programmers often work with hexadecimal (base-16)</li>
          <li>Data storage and memory addresses use these systems</li>
          <li>Converting between number systems is a fundamental skill</li>
        </ul>
        
        <p>
          In the next section, we'll explore how computers use the binary system 
          to represent all information - numbers, text, images, and even this very page!
        </p>
      </Section>
    </BookPage>
  );
};

export default HistoryOfNumbers;