import style from "./groupList.module.scss";

const GroupListItem = () => {
  return (
    <li className={style.group_list_item}>
      <div className={style.top_area}>
        <h3 className={style.group_title}>
          미식도 내 이름은 비룡
          <div className={style.pioneer_cnt}>
            <span>h</span>
            <span>3</span>
          </div>
        </h3>
        <div>
          <button>U</button>
          <button>D</button>
        </div>
      </div>
      <ul className={style.user_list}>
        <li>song</li>
        <li>JuneHyung</li>
        <li>순</li>
      </ul>
    </li>
  );
};

export default GroupListItem;
