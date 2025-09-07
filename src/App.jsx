// File: App.js
import React, { useState } from "react";
import Page from "./components/Page";
import Envelope from "./components/Envelope";

// Import video (pastikan file-file ini ada di folder assets)
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Semua halaman disimpan dalam 1 array
  const pages = [
    {
      video: video1,
      message: "HHayy sayang 💖 Aku bersyukur banget bisa ketemu kamu. Kamu bikin hari-hariku lebih berarti 🌸",
      buttons: [
        {
          text: "Aku juga bersyukur sayang ❤️",
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold",
          onClick: () => setCurrentPage(1),
        },
      ],
    },
    {
      video: video2,
      message: "KKadang aku suka marah, tapi itu karena aku sayang banget sama kamu. Maafin aku ya 🌈",
      buttons: [
        {
          text: "Aku maafin sayangg 😊",
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold",
          onClick: () => setCurrentPage(2),
        },
        {
          text: "Masih kesal nih 😠",
          runaway: true, // biar tombol bisa dibuat 'lari'
          onClick: () => console.log("Tombol tidak bisa diklik"),
        },
      ],
    },
    {
      video: video3,
      message: "AAku selalu mikirin kamu 🥹 Dari bangun sampai tidur lagi, kamu tuh ada terus di pikiranku 😭",
      buttons: [
        {
          text: "Kamu juga selalu di pikiranku sayang❤️",
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold",
          onClick: () => setCurrentPage(3),
        },
        {
          text: "Bohong deh 🙄",
          runaway: true,
          onClick: () => console.log("Tombol tidak bisa diklik"),
        },
      ],
    },
    {
      video: video4,
      message: "TTerima kasih udah nerima aku apa adanya. Aku janji bakal selalu sayang sama kamu 🏡",
      buttons: [
        {
          text: "Buka Surat Cinta 💌",
          className: "bg-pink-500 hover:bg-pink-600 text-white font-bold",
          onClick: () => setCurrentPage(4),
        },
      ],
    },
  ];

  // Fungsi next page
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(pages.length);
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

      {/* Render halaman */}
      {currentPage < pages.length ? (
        <Page
          gifSrc={pages[currentPage].video}
          message={pages[currentPage].message}
          onNext={nextPage}
          onPrevious={previousPage}
          showPrevious={currentPage > 0}
          isLast={currentPage === pages.length - 1}
          pageNumber={currentPage}
          buttons={pages[currentPage].buttons}
        />
      ) : (
        <Envelope onBack={goToFirstPage} />
      )}
    </div>
  );
}

export default App;
