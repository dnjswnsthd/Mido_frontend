"use client";
import {useState} from "react";
import style from "./../userPage.module.scss";
import UserJoinGroupList from "./UserJoinGroupList";
import UserWaitGroupList from "./UserWaitGroupList";

const UserGroupListContainer = () => {
  const [activeState, setActiveState] = useState<'join' | 'wait'>('join')
  
  const handleActiveState = (state: 'join' | 'wait') => {
    setActiveState(state);
  }

  return (
    <>
      <ul className={style.group_tab_nav}>
        <li onClick={()=>handleActiveState('join')}>참여 그룹</li>
        <li onClick={()=>handleActiveState('wait')}>요청 대기</li>
      </ul>

      {activeState==='join' ? <UserJoinGroupList /> : <UserWaitGroupList />}
    </>
  );
};

export default UserGroupListContainer;
