import React, { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
  padding?: string;
}

const Main: React.FC<MainProps> = ({ children, padding = 'p-4' }) => {
  return (
    <main className={`min-h-screen ${padding}`}>
      {children}
    </main>
  );
};

export default Main;