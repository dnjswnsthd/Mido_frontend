"use client";

import UserWaitGroupItem from "./UserWaitGroupItem";
import style from "./../userPage.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getGroupList } from "../../group/_lib/getGroupList";
const UserWaitGroupList = () => {
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
        {groupList.data.map((info:any) => {
          return <UserWaitGroupItem info={info} key={`${info.group_id}${info.group_name}`} />;
        })}
      </ul>
      <div className={style.pagenation_bar}>1</div>
    </>
  );
}
export default UserWaitGroupList;