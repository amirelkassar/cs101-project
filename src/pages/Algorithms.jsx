import React from 'react';
import BookPage, { Section, KeyPoints, Example, CodeBlock } from '../components/BookPage';

const Algorithms = ({ title = 'Algorithms: Problem Solving Step-by-Step' }) => {
  return (
    <BookPage title={title} pageNumber={5} totalPages={8}>
      <Section title="What is an Algorithm?">
        <p>
          An algorithm is a clear, step-by-step procedure to solve a problem.
          It describes what to do, not necessarily how a computer executes it.
          Good algorithms are correct, efficient, and easy to understand.
        </p>
        <KeyPoints
          points={[
            'Algorithm = step-by-step instructions',
            'Same input → same output (deterministic)',
            'Measured by correctness, clarity, and efficiency',
          ]}
        />
      </Section>

      <Section title="Example: Find the Maximum Number">
        <p>
          Given a list of numbers, we want to find the largest value.
        </p>
        <Example title="Pseudocode">
          <CodeBlock language="pseudocode">
{`max <- first number
for each number in the list:
  if number > max:
    max <- number
output max`}
          </CodeBlock>
        </Example>
        <KeyPoints
          points={[
            'Initialize with a sensible starting value',
            'Update the current best when a better candidate appears',
            'One pass through the list → linear time O(n)',
          ]}
        />
      </Section>

      <Section title="Algorithm Qualities">
        <p>
          We often compare algorithms by how much time and memory they use.
          Big-O notation helps us describe how running time grows with input size.
        </p>
        <Example title="Common Complexities">
          <ul>
            <li>O(1) — Constant time</li>
            <li>O(log n) — Logarithmic time (binary search)</li>
            <li>O(n) — Linear time (one pass)</li>
            <li>O(n log n) — Efficient sorting (merge/quick sort average)</li>
            <li>O(n^2) — Nested loops (simple comparison sort)</li>
          </ul>
        </Example>
      </Section>
    </BookPage>
  );
};

export default Algorithms;