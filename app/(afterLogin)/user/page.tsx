// import { GroupInfo } from "../group/page";
import Profile from "../_component/Profile";
import style from "./userPage.module.scss";
import UserGroupListContainer from "./_component/UserGroupListContainer";

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
        <UserGroupListContainer/>
      </div>
    </div>
  );
};

export default UserPage;
