import React from 'react';

function CustomIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="512"
      height="512"
    >
      {/* Use the path from Flaticon here */}
      <path d='/Users/zain/GuardianGram/nextjs-tailwind-ionic-capacitor-starter/out/home.svg' fill={props.fillColor} />
    </svg>
  );
}

export default CustomIcon;