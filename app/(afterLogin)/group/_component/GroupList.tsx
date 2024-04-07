import { GroupInfo } from "../page";
import GroupListItem from "./GroupListItem";
import style from "./groupList.module.scss";


const GroupList = ({list}: {list: GroupInfo[]}) => {
  return (
    <ul className={style.group_list}>
      {list && list.map((info: GroupInfo)=>{
        return <GroupListItem key={info.group_id} info={info}/>
      })}
    </ul>
  )
}

export default GroupList;