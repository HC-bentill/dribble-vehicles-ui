import React from "react";

type Props = {
  image: string;
  name: string;
  description: string;
  status: string;
};

const stat = {
  male: "on the way",
  female: "loading",
};

const UserInformationCard = ({image, name, description, status}: Props) => {
  return (
    <div className="user-card">
      <div className="user-image" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center center"}}>
        {status?.toLowerCase() === "male" && <span className="user-online"></span>}
      </div>
      <div>
        <p className="user-name">{name}</p>
        <p className="user-description">{description}</p>
      </div>
      {/* <div className="user-status">{stat[status]}</div> */}
    </div>
  );
};

export default UserInformationCard;
