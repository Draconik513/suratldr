import React from 'react';
import Page from './Page';
import video1 from '../assets/video1.mp4';

const Page1 = ({ onNext, onPrevious, showPrevious, pageNumber }) => {
  const message = "Hayy sayang 🥹 Aku bersyukur banget bisa ketemu kamu. Kamu bikin hari-hariku lebih berarti";

  const buttons = [
    {
      text: "Aku juga bersyukur sayang 🥺💕",
      onClick: onNext,
    },
  ];

  return (
    <Page
      gifSrc={video1}
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

export default Page1;