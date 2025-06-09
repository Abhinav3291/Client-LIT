import React, { useEffect, useState } from 'react';

const FlipPage = ({ children }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFlipped(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative perspective-[1200px] min-h-screen">
      <div
        className={`min-h-screen transition-transform duration-1000 ease-in-out ${
          flipped ? 'rotate-y-0' : 'rotate-y-180'
        } transform-style-preserve-3d`}
      >
        {children}
      </div>
    </div>
  );
};

export default FlipPage;
