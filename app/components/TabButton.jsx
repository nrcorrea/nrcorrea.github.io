import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#7cada0]";
  const underlineStyle = {
    width: active ? 'calc(100% - 0.75rem)' : '0',
    transition: 'width 0.3s ease',
  };

  return (
    <button onClick={selectTab} className="flex flex-col items-start">
      <p className={`mr-3 font-semibold hover:text-[#2C3531] ${buttonClasses}`}>
        {children}
      </p>
      <div
        style={underlineStyle}
        className="h-1 bg-primary-500 mt-2 mr-3"
      ></div>
    </button>
  );
};

export default TabButton;
