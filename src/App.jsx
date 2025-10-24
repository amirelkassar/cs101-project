import React from 'react';
import BookSlider from './components/BookSlider';
import CoverPage from './pages/CoverPage';
import HistoryOfComputers from './pages/HistoryOfComputers';
import HistoryOfNumbers from './pages/HistoryOfNumbers';
import BinarySystem from './pages/BinarySystem';
import './App.css';

function App() {
  const pages = [
    <CoverPage key="cover" title="CS101: Introduction to Computer Science" />,
    <HistoryOfComputers key="history-computers" title="History of Computers" />,
    <HistoryOfNumbers key="history-numbers" title="History of Numbers" />,
    <BinarySystem key="binary-system" title="Binary System" />,
    // TODO: Add remaining pages
    // <ASCIITable key="ascii" title="ASCII Table" />,
    // <DataRepresentation key="data-rep" title="How Computers Represent Information" />,
    // <ComputingTheory key="theory" title="Theory Behind Computing" />,
    // <ProblemSolving key="problem-solving" title="Problem Solving and Algorithms" />,
    // <ScratchIntro key="scratch" title="Introduction to Scratch" />,
    // <Functions key="functions" title="Functions" />,
  ];

  return (
    <div className="App">
      <BookSlider pages={pages} />
    </div>
  );
}

export default App;
