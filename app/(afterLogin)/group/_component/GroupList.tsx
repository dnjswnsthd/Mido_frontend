import GroupListItem from "./GroupListItem";
import style from "./groupList.module.scss";
const GroupList = () => {
  return (
    <ul className={style.group_list}>
      <GroupListItem />
      <GroupListItem />
      <GroupListItem />
    </ul>
  )
}

export default GroupList;