import MdiIcon from "../../_component/MdiIcon";
import Profile from "../../_component/Profile";
import { GroupInfo } from "../page";

import style from "./groupList.module.scss";

interface GroupListItemProps {
  info: GroupInfo;
}
const GroupListItem = ({ info }: GroupListItemProps) => {
  return (
    <li className={style.group_list_item}>
      <div className={style.top_area}>
        <h3 className={style.group_title}>
          {info.group_name}
          <div className={style.pioneer_cnt}>
            <MdiIcon path="mdiAccount" size={16} />
            <span>{info.pioneer_list.length}</span>
          </div>
        </h3>
        <div className={style.button_wrap}>
          <button>
            <MdiIcon path={"mdiPencil"} size={20} color={"#fff"} />
          </button>
          <button>
            <MdiIcon path={"mdiDelete"} size={20} color={"#fff"} />
          </button>
        </div>
      </div>
      <ul className={style.user_list}>
        {info.pioneer_list.map((pioneer) => {
          return (
            <li key={pioneer.pioneer_id} className={style.user_info}>
              <Profile />
              <p className={`${style.user_name}`}>{pioneer.pioneer_nickname}</p>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default GroupListItem;
