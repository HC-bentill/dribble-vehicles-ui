import React from "react";

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

const ChevdownIcon = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default ChevdownIcon;
