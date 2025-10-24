import React from 'react';
import BookPage, { Section, KeyPoints, Example, ImageFigure, Table, CodeBlock } from '../components/BookPage';
import binaryDigitsImg from '../assets/images/binary_digits.png';
import logicGatesImg from '../assets/images/logic_gates.png';
import bitByteImg from '../assets/images/bit_byte.png';

const BinarySystem = () => {
  const binaryConversionData = [
    ['0', '0000', 'Zero'],
    ['1', '0001', 'One'],
    ['2', '0010', 'Two'],
    ['3', '0011', 'Three'],
    ['4', '0100', 'Four'],
    ['5', '0101', 'Five'],
    ['6', '0110', 'Six'],
    ['7', '0111', 'Seven'],
    ['8', '1000', 'Eight'],
    ['9', '1001', 'Nine'],
    ['10', '1010', 'Ten'],
    ['15', '1111', 'Fifteen'],
    ['16', '10000', 'Sixteen'],
    ['31', '11111', 'Thirty-one'],
    ['255', '11111111', 'Max 8-bit value']
  ];

  const logicTableData = [
    ['A', 'B', 'AND', 'OR', 'XOR'],
    ['0', '0', '0', '0', '0'],
    ['0', '1', '0', '1', '1'],
    ['1', '0', '0', '1', '1'],
    ['1', '1', '1', '1', '0']
  ];

  return (
    <BookPage title="Binary System" pageNumber={3} totalPages={10}>
      <Section title="What is Binary?">
        <p>
          Binary is a base-2 number system that uses only two digits: 0 and 1. 
          While humans naturally use decimal (base-10) because we have 10 fingers, 
          computers use binary because it perfectly matches how electronic circuits work.
        </p>
        
        <ImageFigure 
          src={binaryDigitsImg} 
          alt="Binary digits 0 and 1" 
          caption="Binary uses only two digits: 0 (OFF) and 1 (ON)"
        />
        
        <p>
          In electronic circuits:
        </p>
        <ul>
          <li><strong>0</strong> represents "OFF" - no electrical current</li>
          <li><strong>1</strong> represents "ON" - electrical current flowing</li>
        </ul>
      </Section>

      <Section title="How Binary Works">
        <p>
          Just like decimal uses powers of 10, binary uses powers of 2. Each position 
          in a binary number represents a different power of 2:
        </p>
        
        <Example title="Binary Place Values">
          <CodeBlock language="text">
Position:  8  4  2  1  (powers of 2)
Binary:    1  0  1  1
Decimal:   8+ 0+ 2+ 1 = 11
          </CodeBlock>
          <p>So binary 1011 equals decimal 11</p>
        </Example>

        <h3>Converting Decimal to Binary</h3>
        <p>To convert decimal to binary, repeatedly divide by 2 and track remainders:</p>
        
        <Example title="Convert 13 to Binary">
          <CodeBlock language="text">
13 ÷ 2 = 6 remainder 1
 6 ÷ 2 = 3 remainder 0  
 3 ÷ 2 = 1 remainder 1
 1 ÷ 2 = 0 remainder 1

Read remainders bottom to top: 1101
So 13 in decimal = 1101 in binary
          </CodeBlock>
        </Example>

        <h3>Binary Conversion Table</h3>
        <Table 
          headers={['Decimal', 'Binary', 'Name']}
          rows={binaryConversionData}
        />
      </Section>

      <Section title="Bits and Bytes">
        <ImageFigure 
          src={bitByteImg} 
          alt="Bit and byte visualization" 
          caption="A bit is a single binary digit; a byte is 8 bits"
        />
        
        <p>
          <strong>Bit:</strong> Short for "binary digit" - a single 0 or 1<br/>
          <strong>Byte:</strong> A group of 8 bits
        </p>
        
        <p>
          One byte can represent 2⁸ = 256 different values (0-255). This is why:
        </p>
        <ul>
          <li>ASCII characters fit in one byte (0-127)</li>
          <li>RGB color values use 0-255 for each color</li>
          <li>Many programming languages have "byte" data types</li>
        </ul>

        <Example title="Byte Examples">
          <CodeBlock language="text">
1 byte = 8 bits
Examples:
00000000 = 0 in decimal
11111111 = 255 in decimal  
01000001 = 65 in decimal (ASCII 'A')
          </CodeBlock>
        </Example>
      </Section>

      <Section title="Logic Gates and Boolean Operations">
        <ImageFigure 
          src={logicGatesImg} 
          alt="Logic gates diagram" 
          caption="Basic logic gates: AND, OR, and NOT operations"
        />
        
        <p>
          Computers perform operations using logic gates that work with binary values:
        </p>
        
        <ul>
          <li><strong>AND:</strong> Output is 1 only if both inputs are 1</li>
          <li><strong>OR:</strong> Output is 1 if at least one input is 1</li>
          <li><strong>NOT:</strong> Output is opposite of input (0→1, 1→0)</li>
          <li><strong>XOR:</strong> Output is 1 if inputs are different</li>
        </ul>

        <h3>Boolean Logic Truth Table</h3>
        <Table 
          headers={logicTableData[0]}
          rows={logicTableData.slice(1)}
        />
      </Section>

      <KeyPoints points={[
        "Binary uses only 0 and 1, matching electronic circuits (OFF/ON)",
        "Each position represents a power of 2 (1, 2, 4, 8, 16, ...)",
        "A bit is one binary digit; a byte is 8 bits (256 possible values)",
        "Logic gates perform Boolean operations on binary data",
        "All computer data - numbers, text, images - is stored in binary"
      ]} />

      <Section title="Why Binary Matters">
        <p>
          Understanding binary is crucial because:
        </p>
        <ul>
          <li>All computer data is ultimately stored as binary</li>
          <li>Programming often involves bitwise operations</li>
          <li>Computer memory and storage are measured in bytes</li>
          <li>Network protocols and file formats use binary encoding</li>
          <li>Understanding binary helps debug low-level problems</li>
        </ul>
        
        <Example title="Real-World Binary">
          <p>When you save a file, your computer converts everything to binary:</p>
          <CodeBlock language="text">
The letter 'A' → 01000001
The number 42 → 00101010  
A red pixel → 11111111 00000000 00000000
          </CodeBlock>
        </Example>
      </Section>
    </BookPage>
  );
};

export default BinarySystem;