import React, { useState, useEffect } from 'react';
import RunawayButton from './RunawayButton';

const Page = ({ 
  gifSrc, 
  message, 
  onNext, 
  onPrevious, 
  showPrevious, 
  isLast, 
  pageNumber,
  buttons = [] 
}) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedMessage('');
    setCurrentIndex(0);
  }, [message]);

  useEffect(() => {
    if (currentIndex < message.length) {
      const timer = setTimeout(() => {
        setDisplayedMessage(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, message]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      {/* Floating hearts */}
      <div className="floating-hearts">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 relative overflow-hidden">
        {/* Video */}
        <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
          <video 
            src={gifSrc} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto max-h-64 object-cover"
          />
        </div>

        {/* Message */}
        <div className="mb-8 text-center">
          <div className="text-pink-800 text-lg font-medium min-h-24 flex items-center justify-center">
            {displayedMessage}
            {currentIndex < message.length && (
              <span className="typewriter-cursor">|</span>
            )}
          </div>
        </div>

        {/* Navigation buttons - TOMBOL BIASA */}
        <div className="flex flex-col gap-3 relative">
          {buttons.filter(btn => !btn.runaway).map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
            >
              {button.text}
            </button>
          ))}
        </div>

        {/* Previous button */}
        {showPrevious && (
          <button
            onClick={onPrevious}
            className="mt-4 text-pink-600 hover:text-pink-800 font-medium transition duration-300"
          >
            ← Kembali
          </button>
        )}
      </div>

      {/* TOMBOL RUNAWAY - DITARO DI LUAR KOTAK UTAMA */}
      {buttons.filter(btn => btn.runaway).map((button, index) => (
        <RunawayButton
          key={`runaway-${index}`}
          text={button.text}
          onButtonClick={button.onClick}
          pageNumber={pageNumber}
        />
      ))}
    </div>
  );
};

export default Page;