import React from "react";

const HeaderSection = () => {
  return (
    <header 
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: `url(${"public/images/headerImage.jpg"})` }}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-amber-50" style={{ textShadow: '6px 6px 6px rgba(0, 0, 0, 0.5)' }}>Nicholas Correa</h1>
        <p className="text-4xl text-amber-50 mt-4" style={{ textShadow: '6px 6px 6px rgba(0, 0, 0, 0.5)' }}>Software Engineer</p>
      </div>
    </header>
  );
};

export default HeaderSection;
