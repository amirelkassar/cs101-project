import React, { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CoverPage from './pages/CoverPage';
import ContentPage from './components/ContentPage';
import lecturesData from './data/lectures.json';
import './App.css';

function App() {
  const [currentLecture, setCurrentLecture] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageContent, setPageContent] = useState(null);

  const lectures = useMemo(() => lecturesData.lectures, []);

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

  useEffect(() => {
    const loadContent = async () => {
      if (!currentPageData) return;
      if (currentPageData.type === 'component') {
        setPageContent(null);
        return;
      }
      try {
        const res = await fetch(`/data/pages/${currentPageData.contentFile}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch ${currentPageData.contentFile}: ${res.status}`);
        }
        const json = await res.json();
        setPageContent(json);
      } catch (e) {
        console.error('Failed to load page content', e);
        setPageContent({ title: currentPageData.title, sections: [{ type: 'section', title: 'Error', content: [{ type: 'paragraph', text: 'Could not load content.' }] }] });
      }
    };
    loadContent();
  }, [currentLecture, currentPage]);

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
          {currentPageData.type === 'component' ? (
            <CoverPage key="cover" title="CS101: Introduction to Computer Science" />
          ) : pageContent ? (
            <ContentPage
              title={pageContent.title || currentPageData.title}
              content={pageContent}
              pageNumber={currentPage + 1}
              totalPages={currentLectureData.pages.length}
            />
          ) : (
            <div style={{ padding: 24 }}>Loading content...</div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
