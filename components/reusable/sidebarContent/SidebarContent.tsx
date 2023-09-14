import React from "react";
import CustomAccordion from "../customAccordion/CustomAccordion";
import {GetRandomUsers} from "@/http";
import useSWR from "swr";
import UserInformationCard from "../userInformationCard/UserInformationCard";

type Props = {
  allUsers: any;
};

const SidebarContent = (props: Props) => {
  const users = useSWR("getRandomUses", () => GetRandomUsers(), {
    revalidateOnMount: true, // Fetch data on component mount
    revalidateOnFocus: false, // Don't fetch data when component gains focus
    revalidationInterval: 3600000, // Revalidate every hour
    shouldRetryOnError: false,
  });

  return (
    <div className="sidebar-content">
      {users.isLoading ? (
        <p style={{textAlign: "center", padding: "10px"}}>Please wait...</p>
      ) : (
        <>
          <CustomAccordion title={"favourites"} titleIcon={"⭐"}>
            {users?.data?.results?.slice(0, 4)?.map((user: any) => (
              <UserInformationCard image={user?.picture?.thumbnail} name={`${user?.name?.first} ${user?.name?.last}`} description={user?.email} status={user?.gender} />
            ))}
          </CustomAccordion>
          <CustomAccordion title={"Trucks"}>
            {users?.data?.results?.slice(5, 8)?.map((user: any) => (
              <UserInformationCard image={user?.picture?.thumbnail} name={`${user?.name?.first} ${user?.name?.last}`} description={user?.email} status={user?.gender} />
            ))}
          </CustomAccordion>
          <CustomAccordion title={"Vans"}>
            {users?.data?.results?.slice(9, 14)?.map((user: any) => (
              <UserInformationCard image={user?.picture?.thumbnail} name={`${user?.name?.first} ${user?.name?.last}`} description={user?.email} status={user?.gender} />
            ))}
          </CustomAccordion>
        </>
      )}
    </div>
  );
};

export default SidebarContent;
