import React from "react";

interface Props {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

const ChevupIcon = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 15L12 9L18 15" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default ChevupIcon;
