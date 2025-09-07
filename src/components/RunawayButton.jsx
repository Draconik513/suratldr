// File: components/RunawayButton.js
import React, { useState, useRef, useEffect } from "react";

const RunawayButton = ({ text, onButtonClick, pageNumber }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!buttonRef.current) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
      );

      if (distance < 120) {
        const angle = Math.atan2(mouseY - buttonCenterY, mouseX - buttonCenterX);
        const moveDistance = 100; // jarak kabur

        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 40;

        let newX = position.x - Math.cos(angle) * moveDistance + offsetX;
        let newY = position.y - Math.sin(angle) * moveDistance + offsetY;

        // BATAS layar
        const maxX = window.innerWidth - buttonRect.width - 20;
        const minX = 20;
        const maxY = window.innerHeight - buttonRect.height - 20;
        const minY = 20;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        setPosition({ x: newX, y: newY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [position]);

  const handleClick = () => {
    // dia selalu ngindar, kalau ketangkep baru jalanin fungsi
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
    onButtonClick();
  };

  useEffect(() => {
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    setShowMessage(false);
  }, [pageNumber]);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: "left 0.4s ease-out, top 0.4s ease-out",
        }}
        className="bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg border-2 border-pink-600"
      >
        {text}
      </button>

      {showMessage && (
        <div
          style={{
            position: "absolute",
            left: `${position.x}px`,
            top: `${position.y + 60}px`,
          }}
          className="bg-white p-3 rounded-lg shadow-lg text-pink-800 font-medium text-center whitespace-nowrap animate-bounce"
        >
          ❤️ gaboleh pencet tombol ini ya sayang! ❤️
        </div>
      )}
    </>
  );
};

export default RunawayButton;
