"use client";

import {  useEffect, useState } from "react";

import style from "./groupListPage.module.scss";
import GroupList from "./_component/GroupList";
import MdiIcon from "../_component/MdiIcon";
import Link from "next/link";
import { Pioneer } from "../home/page";


export interface Boss{
  boss_id: string;
  boss_nickname: string;
  boss_image_url: string;
}
export interface GroupInfo {
  "group_id": number;
  "group_name": string;
  "pioneer_list": Pioneer[]
  "boss": Boss,
}



const GroupListPage = () => {
  const [list, setList] = useState<GroupInfo[]>([]);

  const getGroupList = async () => {
    try {
      const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", userId);

      const response = await fetch(`http://localhost:3001/api/group/list?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
      });

      if (response.ok) {
        const { data } = await response.json();
        setList(data);
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getGroupList();
  }, []);

  return (
    <div className={style.group_list_page}>
      <div className={style.top_area}>
        <h2>그룹</h2>
        <div className={style.button_area}>
          <MdiIcon path={"mdiMagnify"} size={20} />

          <button>
            <Link href={"/group/add"}>
              <MdiIcon path={"mdiPlusBoxMultipleOutline"} size={20} />
            </Link>
          </button>
        </div>
      </div>
      <GroupList list={list}/>
    </div>
  );
};

export default GroupListPage;
