import React, { useState } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Envelope from "./components/Envelope";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Fungsi next page
  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(4); // Halaman amplop
    }
  };

  // Fungsi previous page
  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Kembali ke halaman pertama
  const goToFirstPage = () => {
    setCurrentPage(0);
  };

  // Render halaman berdasarkan currentPage
  const renderPage = () => {
    switch(currentPage) {
      case 0:
        return (
          <Page1 
            onNext={nextPage} 
            onPrevious={previousPage} 
            showPrevious={false} 
            pageNumber={0}
          />
        );
      case 1:
        return (
          <Page2 
            onNext={nextPage} 
            onPrevious={previousPage} 
            showPrevious={true} 
            pageNumber={1}
          />
        );
      case 2:
        return (
          <Page3 
            onNext={nextPage} 
            onPrevious={previousPage} 
            showPrevious={true} 
            pageNumber={2}
          />
        );
      case 3:
        return (
          <Page4 
            onNext={nextPage} 
            onPrevious={previousPage} 
            showPrevious={true} 
            pageNumber={3}
          />
        );
      case 4:
        return <Envelope onBack={goToFirstPage} />;
      default:
        return <Page1 onNext={nextPage} onPrevious={previousPage} showPrevious={false} pageNumber={0} />;
    }
  };

  return (
    <div className="App min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 relative overflow-hidden">
      {/* Animated hearts background */}
      <div className="hearts-container">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              fontSize: `${1 + Math.random() * 1.5}rem`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {renderPage()}
    </div>
  );
}

export default App;