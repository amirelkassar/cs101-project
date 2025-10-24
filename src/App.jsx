import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CoverPage from './pages/CoverPage';
import HistoryOfComputers from './pages/HistoryOfComputers';
import HistoryOfNumbers from './pages/HistoryOfNumbers';
import BinarySystem from './pages/BinarySystem';
import Algorithms from './pages/Algorithms';
import ScratchBasics from './pages/ScratchBasics';
import Functions from './pages/Functions';
import './App.css';

function App() {
  const [currentLecture, setCurrentLecture] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const lectures = [
    {
      title: 'Lecture 1: Foundations',
      pages: [
        { component: <CoverPage key="cover" title="CS101: Introduction to Computer Science" />, title: 'Cover' },
        { component: <HistoryOfComputers key="history-computers" title="History of Computers" />, title: 'History of Computers' },
        { component: <HistoryOfNumbers key="history-numbers" title="History of Numbers" />, title: 'History of Numbers' },
        { component: <BinarySystem key="binary-system" title="Binary System" />, title: 'Binary System' },
        { component: <Algorithms key="algorithms" title="Algorithms: Problem Solving Step-by-Step" />, title: 'Algorithms' },
        { component: <ScratchBasics key="scratch-basics" title="Scratch Basics: Visual Programming" />, title: 'Scratch Basics' },
        { component: <Functions key="functions" title="Functions: Reusable Building Blocks" />, title: 'Functions' }
      ]
    },
    {
      title: 'Lecture 2: Programming Basics',
      pages: []
    }
  ];

  const handleSelectLecture = (lectureIndex) => {
    setCurrentLecture(lectureIndex);
    setCurrentPage(0);
  };

  const handleSelectPage = (lectureIndex, pageIndex) => {
    setCurrentLecture(lectureIndex);
    setCurrentPage(pageIndex);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < lectures[currentLecture].pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const currentLectureData = lectures[currentLecture];
  const currentPageData = currentLectureData.pages[currentPage];

  return (
    <div className="App">
      <Sidebar
        lectures={lectures}
        currentLecture={currentLecture}
        currentPage={currentPage}
        onSelectLecture={handleSelectLecture}
        onSelectPage={handleSelectPage}
        isOpen={sidebarOpen}
      />
      <div className="main-content">
        <Header
          currentPage={currentPage}
          totalPages={currentLectureData.pages.length}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          pageTitle={currentPageData.title}
          lectureTitle={currentLectureData.title}
          onToggleSidebar={toggleSidebar}
        />
        <main className="page-content">
          {currentPageData.component}
        </main>
      </div>
    </div>
  );
}

export default App;
