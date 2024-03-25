import Profile from "../_component/Profile";
import UserGroupItem from "./_component/UserGroupItem";
import style from "./userPage.module.scss";

const UserPage = () => {
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
        <ul className={style.group_tab_list}>
          <UserGroupItem />
          <UserGroupItem />
          <UserGroupItem />
          <UserGroupItem />
        </ul>
        <div className={style.pagenation_bar}>
          1
        </div>
      </div>
    </div>
  );
};

export default UserPage;
