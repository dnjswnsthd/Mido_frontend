"use client";

import style from "./../userPage.module.scss";
import { useQuery } from "@tanstack/react-query";
import UserJoinGroupItem from "./UserJoinGroupItem";
import { useState } from "react";
import { getGroupList } from "../../group/_lib/getGroupList";
const UserJoinGroupList = () => {
  const [page, setPage] = useState(1);
  
  const {data: groupList, isError, error ,isLoading, refetch} = useQuery({
    queryKey: ['getGroupList', page],
    queryFn: getGroupList,
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  if(!groupList) return null;

  return (
    <>
      <ul className={style.group_tab_list}>
        {groupList.data.map((info: any) => {
          return <UserJoinGroupItem info={info} key={`${info.group_id}${info.group_name}`} />;
        })}
      </ul>
      <div className={style.pagenation_bar}>1</div>
    </>
  );
};

export default UserJoinGroupList;
