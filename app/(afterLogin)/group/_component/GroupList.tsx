"use client";

import { useEffect, useState } from "react";
import { GroupInfo } from "../page";
import GroupListItem from "./GroupListItem";
import style from "./groupList.module.scss";
import { getGroupList } from "../_lib/getGroupList";


const GroupList = () => {
  const [list, setList] = useState<GroupInfo[]>([]);

  const getList = async () => {
    try {
      const {data} = await getGroupList();
      if (data) {
        setList(data);
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <ul className={style.group_list}>
      {list && list.map((info: GroupInfo)=>{
        return <GroupListItem key={info.group_id} info={info}/>
      })}
    </ul>
  )
}

export default GroupList;