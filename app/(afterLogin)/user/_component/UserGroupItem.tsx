import Profile from "../../_component/Profile";
import style from "./userGroupItem.module.scss";

const UserGroupItem = () => {
  return (
    <li className={style.group_tab_list_item}>
      <div className={style.top_area}>
        <Profile className={style.profile} size={36} />
        <Profile className={style.profile} size={36} />
        <Profile className={style.profile} size={36} />
        <Profile className={style.profile} size={36} />
      </div>
      <div className={style.bottom_area}>
        <h3>title</h3>
        <p>song 외 3명</p>
        <button>그룹나가기</button>
      </div>
    </li>
  );
};

export default UserGroupItem;
