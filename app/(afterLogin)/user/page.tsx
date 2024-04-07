'use client';
import { useCallback, useEffect, useState } from "react";
import Profile from "../_component/Profile";
import style from "./userPage.module.scss";
import UserGroupList from "./_component/UserGroupList";
import { GroupInfo } from "../group/page";

const UserPage = () => {
  const [groupList, setGroupList] = useState<GroupInfo[]>([]);
  const [page, setPage] = useState(0);


  const getGroupList =useCallback( async () => {
    try {
      const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", userId);
      queryParams.append("page", page.toString());
      
      const response = await fetch(`http://localhost:3001/api/group/list?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
      });
      
      if (response.ok) {
        const { data } = await response.json();
        setGroupList(data);
      } else {
        
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  },[ page]);

  useEffect(()=>{
    getGroupList();
  },[])

  return (
    <div className={style.user_page}>
      <h2 className={style.user_page_title}>
        사용자 정보 수정
        <button className={style.logout_button}>로그아웃</button>
      </h2>
      <div className={style.profile_wrap}>
        <div className={style.left_area}>
          <Profile className={style.profile_img} size={52}></Profile>
          <div>
            <p>가로등</p>
            <p>cjh951114@naver.com</p>
          </div>
        </div>
        <div className={style.right_area}>
          <button className={style.edit_button}>편집하기</button>
        </div>
      </div>
      <div className={style.group_tab_wrap}>
        <ul className={style.group_tab_nav}>
          <li>참여 그룹</li>
          <li>요청 대기</li>
        </ul>
        <UserGroupList list={groupList}/>
        <div className={style.pagenation_bar}>
          1
        </div>
      </div>
    </div>
  );
};

export default UserPage;
