import React from 'react';
import Page from './Page';
import video4 from '../assets/video4.mp4';

const Page4 = ({ onNext, onPrevious, showPrevious, pageNumber }) => {
  const message = "Terima kasih udah nerima aku apa adanya🥹. Aku janji bakal selalu sayang sama kamu🥹❤️";

  const buttons = [
    {
      text: "Buka Surat Cinta 💌",
      onClick: onNext,
    },
  ];

  return (
    <Page
      gifSrc={video4}
      message={message}
      onNext={onNext}
      onPrevious={onPrevious}
      showPrevious={showPrevious}
      isLast={true}
      pageNumber={pageNumber}
      buttons={buttons}
    />
  );
};

export default Page4;