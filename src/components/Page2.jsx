import React from 'react';
import Page from './Page';
import video2 from '../assets/video2.mp4';

const Page2 = ({ onNext, onPrevious, showPrevious, pageNumber }) => {
  const message = "Kadang aku suka marah, tapi itu karena aku sayang banget sama kamu. Maafin aku ya";

  const buttons = [
    {
      text: "Aku maafin sayangg 😊",
      onClick: onNext,
    },
    {
      text: "Masih kesal nih 😠",
      runaway: true, // PASTIKAN INI ADA
      onClick: () => console.log("Tombol runaway diklik"),
    },
  ];

  return (
    <Page
      gifSrc={video2}
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

export default Page2;