import Profile from "../../_component/Profile";
import { GroupInfo } from "../../group/page";
import style from "./userGroupItem.module.scss";

type UserGroupItemProps = {
  info: GroupInfo;
}

const UserGroupItem = ({info}: UserGroupItemProps) => {
  return (
    <li className={style.group_tab_list_item}>
      <div className={style.top_area}>
        {
          info.pioneer_list.map((pioneer, pIdx)=>{
            return (
              <div key={`${pioneer.pioneer_id}`} className={style.profile_box}>
                <Profile className={style.profile} size={36} url={pioneer.pioneer_image_url}/>
                <span>{pioneer.pioneer_nickname}</span>
              </div>
          )
          })
        }
      </div>
      <div className={style.bottom_area}>
        <h3>{info.group_name}</h3>
        <p>{info.boss.boss_nickname} 외{info.pioneer_list.length-1}명</p>
        <button>그룹나가기</button>
      </div>
    </li>
  );
};

export default UserGroupItem;
