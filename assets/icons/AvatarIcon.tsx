import React from "react";
import userImage from "../../assets/img/userr.jpg";

const AvatarIcon = () => {
  //   return <img src={userImage.src} alt="wew" />;
  return <div className="user-image" style={{backgroundImage: `url(${userImage.src})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}></div>;
};

export default AvatarIcon;
