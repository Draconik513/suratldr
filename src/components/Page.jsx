import React, { useState, useEffect, useRef } from "react";
import RunawayButton from "./RunawayButton";

const Page = ({
  gifSrc,
  message,
  onNext,
  onPrevious,
  showPrevious,
  isLast,
  pageNumber,
  buttons,
}) => {
  const [displayedMessage, setDisplayedMessage] = useState("");
  const videoRef = useRef(null);

  // ✅ Typewriter fix final
  useEffect(() => {
    setDisplayedMessage(""); // reset teks tiap halaman baru
    let index = 0;
    let isCancelled = false;

    const typeWriter = () => {
      if (isCancelled) return;
      if (index < message.length) {
        setDisplayedMessage((prev) => prev + message.charAt(index));
        index++;
        setTimeout(typeWriter, 50); // jeda 50ms per huruf
      }
    };

    typeWriter(); // mulai dari huruf pertama (index 0)

    return () => {
      isCancelled = true;
    };
  }, [pageNumber, message]);

  // ✅ Autoplay video pas halaman berubah
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [pageNumber]);

  // ✅ Render tombol normal / runaway
  const renderButtons = () => {
    if (!buttons || buttons.length === 0) {
      return (
        <button
          onClick={onNext}
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 border-2 border-pink-600"
        >
          {isLast ? "Buka Surat 💌" : "Selanjutnya ➡️"}
        </button>
      );
    }

    return (
      <div className="flex flex-col items-center space-y-4">
        {buttons.map((button, index) =>
          button.runaway ? (
            <RunawayButton
              key={index}
              text={button.text}
              onButtonClick={button.onClick}
              pageNumber={pageNumber}
            />
          ) : (
            <button
              key={index}
              onClick={button.onClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105 border-2 border-pink-600"
            >
              {button.text}
            </button>
          )
        )}
      </div>
    );
  };

  // ✅ Floating hearts dekorasi
  const floatingHearts = [];
  for (let i = 0; i < 8; i++) {
    floatingHearts.push(
      <div
        key={i}
        className="floating-heart"
        style={{
          left: `${10 + i * 10}%`,
          animationDelay: `${i * 0.5}s`,
          color: i % 2 === 0 ? "#ff6b6b" : "#ff8e8e",
        }}
      >
        ❤️
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      {/* Tombol Kembali di pojok kiri atas */}
      {showPrevious && (
        <button
          onClick={onPrevious}
          className="fixed top-4 left-4 bg-pink-300 hover:bg-pink-400 text-pink-800 font-bold py-2 px-4 rounded-full transition duration-300 z-30 flex items-center shadow-lg transform hover:scale-105 border-2 border-pink-400"
        >
          ⬅️ Kembali
        </button>
      )}

      <div className="w-full max-w-md">
        {/* Video Container dengan floating hearts */}
        <div
          className="mb-8 rounded-2xl overflow-hidden shadow-2xl relative mx-auto"
          style={{ width: "320px", height: "320px" }}
        >
          <video
            ref={videoRef}
            src={gifSrc}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            playsInline
          />
          <div className="floating-hearts">{floatingHearts}</div>

          {/* Decorative frame */}
          <div className="absolute inset-0 border-4 border-white border-opacity-30 rounded-2xl pointer-events-none"></div>
        </div>

        {/* Message */}
        <div className="mb-8 px-4 min-h-20">
          <p className="text-pink-800 text-center text-lg font-medium leading-relaxed">
            {displayedMessage}
            <span className="typewriter-cursor">|</span>
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center">{renderButtons()}</div>
      </div>
    </div>
  );
};

export default Page;
