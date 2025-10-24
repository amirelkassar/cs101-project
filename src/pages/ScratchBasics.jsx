import React from 'react';
import BookPage, { Section, KeyPoints, Example } from '../components/BookPage';

const ScratchBasics = ({ title = 'Scratch Basics: Visual Programming' }) => {
  return (
    <BookPage title={title} pageNumber={6} totalPages={8}>
      <Section title="Why Scratch?">
        <p>
          Scratch is a block-based programming language designed for learning.
          You drag and snap blocks together to build programs — no syntax errors.
          It teaches core ideas: sequences, loops, events, variables, and sprites.
        </p>
        <KeyPoints
          points={[
            'Block-based programming: snap pieces together',
            'Immediate visual feedback with sprites and stages',
            'Great for learning logic without worrying about syntax',
          ]}
        />
      </Section>

      <Section title="Core Concepts">
        <ul>
          <li><strong>Sprites</strong>: Characters or objects you control.</li>
          <li><strong>Stage</strong>: The canvas where sprites move.</li>
          <li><strong>Events</strong>: "When green flag clicked", "When key pressed".</li>
          <li><strong>Control</strong>: Loops, conditionals, waiting.</li>
          <li><strong>Variables</strong>: Store and update values.</li>
        </ul>
      </Section>

      <Section title="Example: Move a Sprite">
        <Example title="Behavior">
          <p>
            When the green flag is clicked, point the sprite to the right and 
            move forward until it reaches the edge, then bounce.
          </p>
          <p>
            With Scratch blocks, you would combine: event (green flag), motion (move, turn), 
            control (repeat until), and sensing (if on edge, bounce).
          </p>
        </Example>
      </Section>
    </BookPage>
  );
};

export default ScratchBasics;