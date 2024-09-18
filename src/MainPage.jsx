import React from 'react';
import './MainPage.css';

const MainPage = ({ children }) => {
  return (
    <div className="main-page">
      {children}
    </div>
  );
};

export default MainPage;
