import { GroupInfo } from '../../group/page';
import style from './../userPage.module.scss';
import UserGroupItem from './UserGroupItem';

type UserGroupListProps = {
  list: GroupInfo[]
}
const UserGroupList = ({list}: UserGroupListProps) => {
  return (
    <ul className={style.group_tab_list}>
      {list.map((info, kIdx)=>{
        return <UserGroupItem info={info} key={`${info.group_id}${info.group_name}`}/>
      })}
    </ul>
  )
}

export default UserGroupList;