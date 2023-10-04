import AvatarIcon from "@/assets/icons/AvatarIcon";
import React from "react";
import ChatIcon from "../../assets/icons/ChatIcon";
import CallIcon from "../../assets/icons/CallIcon";
import THreedotsMenuIcon from "../../assets/icons/THreedotsMenuIcon";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header-container">
      <div className="user-container">
        <AvatarIcon />
        <div>
          <p className="user-name">Amador Ibarra</p>
          <p className="user-description">ID: 236-542-907</p>
        </div>
      </div>

      <div className="header-icons">
        <p>
          <ChatIcon />
        </p>
        <div></div>
        <p>
          <CallIcon />
        </p>
        <div className="vertical-seperator"></div>
        <p><THreedotsMenuIcon/></p>
      </div>
    </div>
  );
};

export default Header;
