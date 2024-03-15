"use client";

import { useCallback, useState } from "react";

import style from "./groupListPage.module.scss";
import GroupList from "./_component/GroupList";
import MdiIcon from "../_component/MdiIcon";
const GroupListPage = () => {
  const [list, setList] = useState<Number[]>([1, 2, 3]);
  const handleOnClick = () => {
    setList([...list, list.length + 1]);
  };
  return (
    <div className={style.group_list_page}>
      <div className={style.top_area}>
        <h2>그룹</h2>
        <div className={style.button_area}>
          <button>
            <MdiIcon path={'mdiMagnify'} size={20}/>
          </button>
          <button>
            <MdiIcon path={'mdiPlusBoxMultipleOutline'} size={20}/>
          </button>
        </div>
      </div>
      <GroupList />
    </div>
  );
};

export default GroupListPage;
