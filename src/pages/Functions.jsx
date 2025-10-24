import React from 'react';
import BookPage, { Section, KeyPoints, Example, CodeBlock } from '../components/BookPage';

const Functions = ({ title = 'Functions: Reusable Building Blocks' }) => {
  return (
    <BookPage title={title} pageNumber={7} totalPages={8}>
      <Section title="What is a Function?">
        <p>
          A function is a named chunk of code that performs a specific task.
          It can take inputs (parameters) and optionally return an output (result).
          Functions help us avoid repetition and organize programs.
        </p>
        <KeyPoints
          points={[
            'Encapsulate logic behind a name',
            'Inputs (parameters) → Output (return value)',
            'Promote reuse, clarity, and testing',
          ]}
        />
      </Section>

      <Section title="Example: Add Two Numbers">
        <Example title="Python">
          <CodeBlock language="python">
{`def add(a, b):
    return a + b

result = add(2, 5)  # 7
print(result)`}
          </CodeBlock>
        </Example>
        <KeyPoints
          points={[
            'Define with parameters that represent inputs',
            'Return a value for use elsewhere',
            'Call the function by name with arguments',
          ]}
        />
      </Section>

      <Section title="Design Tips">
        <ul>
          <li>Use clear names that describe the action (e.g., <code>computeAverage</code>).</li>
          <li>Keep functions focused — do one thing well.</li>
          <li>Avoid side effects when possible; prefer returning results.</li>
          <li>Document expected inputs and outputs.</li>
        </ul>
      </Section>
    </BookPage>
  );
};

export default Functions;