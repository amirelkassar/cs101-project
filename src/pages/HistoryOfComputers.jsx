import React from 'react';
import BookPage, { Section, KeyPoints, Example, ImageFigure } from '../components/BookPage';
import abacusImg from '../assets/images/abacus.png';
import analyticalEngineImg from '../assets/images/analytical_engine.png';
import eniacImg from '../assets/images/eniac.png';
import transistorImg from '../assets/images/transistor_computer.png';
import microprocessorImg from '../assets/images/microprocessor.png';

const HistoryOfComputers = () => {
  return (
    <BookPage title="History of Computers" pageNumber={1} totalPages={10}>
      <Section title="What is a Computer?">
        <p>
          The word "computer" originally referred to a person who performed calculations. 
          Before electronic machines, human computers were employed to solve complex mathematical 
          problems, especially during wartime for calculating artillery trajectories and 
          breaking enemy codes.
        </p>
        
        <p>
          Today, we define a computer as an electronic device that can store, retrieve, 
          and process data according to a set of instructions called a program.
        </p>
      </Section>

      <Section title="Evolution of Computing Devices">
        <h3>1. Ancient Calculating Tools (3000 BC - 1600 AD)</h3>
        
        <ImageFigure 
          src={abacusImg} 
          alt="Ancient abacus" 
          caption="The abacus: one of the earliest calculating devices, still used today"
        />
        
        <p>
          The journey began with simple counting tools like the abacus, invented around 
          3000 BC. These mechanical devices helped humans perform basic arithmetic operations 
          much faster than mental calculation alone.
        </p>

        <h3>2. Mechanical Computers (1600s - 1800s)</h3>
        
        <ImageFigure 
          src={analyticalEngineImg} 
          alt="Analytical Engine schematic" 
          caption="Charles Babbage's Analytical Engine - the first design for a general-purpose computer"
        />
        
        <p>
          Charles Babbage designed the Analytical Engine in the 1830s, which is considered 
          the first design for a general-purpose computer. It included all the basic elements 
          of a modern computer: input devices, memory, a central processing unit, and output devices.
        </p>

        <h3>3. Electromechanical Era (1930s - 1940s)</h3>
        
        <p>
          The 1930s saw the development of electromechanical computers that used electrical 
          switches and mechanical relays. These machines could perform calculations much 
          faster than purely mechanical devices.
        </p>

        <h3>4. Electronic Computers (1940s - 1950s)</h3>
        
        <ImageFigure 
          src={eniacImg} 
          alt="ENIAC computer" 
          caption="ENIAC (1946) - one of the first general-purpose electronic computers"
        />
        
        <p>
          ENIAC (Electronic Numerical Integrator and Computer), completed in 1946, was one 
          of the first general-purpose electronic computers. It weighed 30 tons, occupied 
          1,800 square feet, and used 18,000 vacuum tubes.
        </p>

        <h3>5. Transistor Revolution (1950s - 1960s)</h3>
        
        <ImageFigure 
          src={transistorImg} 
          alt="Transistor symbol" 
          caption="The transistor replaced vacuum tubes, making computers smaller and more reliable"
        />
        
        <p>
          The invention of the transistor in 1947 revolutionized computing. Transistors were 
          smaller, more reliable, and consumed less power than vacuum tubes, leading to the 
          second generation of computers.
        </p>

        <h3>6. Integrated Circuits and Microprocessors (1960s - Present)</h3>
        
        <ImageFigure 
          src={microprocessorImg} 
          alt="Microprocessor chip" 
          caption="Modern microprocessors contain billions of transistors on a single chip"
        />
        
        <p>
          The development of integrated circuits (microchips) in the 1960s and microprocessors 
          in the 1970s led to personal computers. Today's smartphones have more computing power 
          than the room-sized computers of the 1940s.
        </p>
      </Section>

      <KeyPoints points={[
        "The word 'computer' originally referred to people who performed calculations",
        "Computing evolved from mechanical devices (abacus) to electronic machines",
        "Key milestones: Analytical Engine (1830s), ENIAC (1946), transistor (1947), microprocessor (1970s)",
        "Each generation became smaller, faster, and more powerful",
        "Modern computers can perform billions of operations per second"
      ]} />

      <Example title="Computing Power Comparison">
        <p>
          <strong>ENIAC (1946):</strong> 5,000 operations per second, 30 tons, room-sized
        </p>
        <p>
          <strong>Modern smartphone:</strong> Billions of operations per second, 200 grams, pocket-sized
        </p>
        <p>
          Your phone is literally millions of times more powerful than the computers that 
          helped win World War II!
        </p>
      </Example>
    </BookPage>
  );
};

export default HistoryOfComputers;