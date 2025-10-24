import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CoverPage from './pages/CoverPage';
import HistoryOfComputers from './pages/HistoryOfComputers';
import HistoryOfNumbers from './pages/HistoryOfNumbers';
import BinarySystem from './pages/BinarySystem';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages = [
    { component: <CoverPage key="cover" title="CS101: Introduction to Computer Science" />, title: "Cover" },
    { component: <HistoryOfComputers key="history-computers" title="History of Computers" />, title: "History of Computers" },
    { component: <HistoryOfNumbers key="history-numbers" title="History of Numbers" />, title: "History of Numbers" },
    { component: <BinarySystem key="binary-system" title="Binary System" />, title: "Binary System" },
    // TODO: Add remaining pages
    // { component: <ASCIITable key="ascii" title="ASCII Table" />, title: "ASCII Table" },
    // { component: <DataRepresentation key="data-rep" title="How Computers Represent Information" />, title: "Data Representation" },
    // { component: <ComputingTheory key="theory" title="Theory Behind Computing" />, title: "Computing Theory" },
    // { component: <ProblemSolving key="problem-solving" title="Problem Solving and Algorithms" />, title: "Problem Solving" },
    // { component: <ScratchIntro key="scratch" title="Introduction to Scratch" />, title: "Scratch Introduction" },
    // { component: <Functions key="functions" title="Functions" />, title: "Functions" },
  ];

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="App">
      <Sidebar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pages={pages}
        isOpen={sidebarOpen}
      />
      <div className="main-content">
        <Header
          currentPage={currentPage}
          totalPages={pages.length}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          pageTitle={pages[currentPage].title}
          onToggleSidebar={toggleSidebar}
        />
        <main className="page-content">
          {pages[currentPage].component}
        </main>
      </div>
    </div>
  );
}

export default App;
