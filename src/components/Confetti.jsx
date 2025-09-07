import React from 'react';
import Confetti from 'react-confetti';

const ConfettiEffect = ({ run }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {run && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          colors={['#ff6b6b', '#ff8e8e', '#ffb6c1', '#ffe6f2']}
        />
      )}
    </div>
  );
};

export default ConfettiEffect;