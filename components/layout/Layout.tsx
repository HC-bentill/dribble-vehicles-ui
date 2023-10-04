import BellIcon from "@/assets/icons/BellIcon";
import DestinationIcon from "@/assets/icons/DestinationIcon";
import HomeIcon from "@/assets/icons/HomeIcon";
import HouseIcon from "@/assets/icons/HouseIcon";
import MapIcon from "@/assets/icons/MapIcon";
import PictureIcon from "@/assets/icons/PictureIcon";
import VanIcon from "@/assets/icons/VanIcon";
import MessageIcon from "@/assets/icons/MessageIcon";
import React from "react";
import SearchBar from "../reusable/searchBar/SearchBar";
import SidebarContent from "../reusable/sidebarContent/SidebarContent";
import SidebarBottom from "../reusable/sidebarContent/SidebarBottom";
import AvatarIcon from "@/assets/icons/AvatarIcon";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({children}: Props) => {
  return (
    <div className="body-container">
      <div className="sidebar-section">
        <div className="sidebar-icons">
          <HomeIcon />
          <MapIcon />
          <DestinationIcon />
          <VanIcon />
          <HouseIcon />
          <div className="line-breaker"></div>
          <MessageIcon />
          <PictureIcon />
          <BellIcon />
          <div className="sidebar-bottom">
            <AvatarIcon />
          </div>
        </div>
        <div className="sidebar-menu">
          <SearchBar />
          <SidebarContent />
          <SidebarBottom />
        </div>
      </div>

      <div className="content">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
