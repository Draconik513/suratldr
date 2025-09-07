// File: components/Envelope.js
import React, { useState } from 'react';
import ConfettiEffect from './Confetti';

const Envelope = ({ onBack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowLetter(true);
    }, 1000);
    
    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  const loveLetter = `Untuk Sayangku Tercinta, 💖

Setiap hari bersamamu adalah anugerah terindah dalam hidupku. 🌸 
Kamu telah mengubah hidupku dengan cara yang tidak pernah aku bayangkan.

Terima kasih untuk tawa, untuk pelukan, untuk semua momen indah yang kita lalui bersama. 🤗
Terima kasih juga untuk air mata, untuk perdebatan, karena itu membuat kita semakin kuat. 💪

Aku mungkin tidak sempurna, tapi aku berjanji akan selalu berusaha menjadi yang terbaik untukmu. 🌟
Aku ingin menghabiskan sisa hidupku bersamamu, membuat kenangan indah, dan membangun impian kita. 🏡

Aku mencintaimu lebih dari kata-kata bisa ungkapkan. ❤️
Kamu adalah belahan jiwaku, tambatan hatiku, dan alasan aku tersenyum setiap hari. 😊

Selamanya milikmu,
Kekasih yang selalu menyayangimu 💕`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative z-10">
      <ConfettiEffect run={showConfetti} />
      
      <div className="relative w-full max-w-md">
        {/* Envelope */}
        <div className={`envelope ${isOpen ? 'open' : ''}`}>
          <div className="bg-pink-300 p-8 rounded-2xl shadow-2xl text-center">
            {!isOpen ? (
              <>
                <h2 className="text-2xl font-bold text-pink-700 mb-4">Surat Cinta 💌</h2>
                <p className="text-pink-600 mb-6">Tekan tombol di bawah untuk membuka surat cintaku ✨</p>
                <button 
                  onClick={handleOpen}
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
                >
                  Buka Surat 💖
                </button>
              </>
            ) : (
              <div className="h-64"></div>
            )}
          </div>
        </div>

        {/* Letter */}
        {isOpen && (
          <div className={`letter ${showLetter ? 'open' : ''} absolute top-0 left-0 w-full bg-white p-6 rounded-2xl shadow-2xl`}>
            <div className="border-2 border-pink-200 p-6 h-64 overflow-y-auto rounded-xl">
              <h3 className="text-xl font-bold text-pink-700 mb-4 text-center">Surat Cinta 💝</h3>
              <pre className="whitespace-pre-wrap font-serif text-pink-800 text-center">
                {loveLetter}
              </pre>
            </div>
            <div className="text-center mt-6">
              <button 
                onClick={onBack}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg transform hover:scale-105"
              >
                Kembali ke Awal 🔄
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Envelope;