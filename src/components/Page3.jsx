import React from 'react';
import Page from './Page';
import video3 from '../assets/video3.mp4';

const Page3 = ({ onNext, onPrevious, showPrevious, pageNumber }) => {
  const message = "Aku selalu mikirin kamu 🥹 Dari bangun sampai tidur lagi, kamu tuh ada terus di pikiranku";

  const buttons = [
    {
      text: "Kamu pun selalu di pikiranku sayang ❤️🥺",
      onClick: onNext,
    },
    {
      text: "Bohong deh 🙄",
      runaway: true, // PASTIKAN INI ADA
      onClick: () => console.log("Tombol runaway diklik"),
    },
  ];

  return (
    <Page
      gifSrc={video3}
      message={message}
      onNext={onNext}
      onPrevious={onPrevious}
      showPrevious={showPrevious}
      isLast={false}
      pageNumber={pageNumber}
      buttons={buttons}
    />
  );
};

export default Page3;