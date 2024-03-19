import { Pioneer } from "../../home/page";
import GroupListItem from "./GroupListItem";
import style from "./groupList.module.scss";


export interface GroupInfo {
  "group_id": number;
  "group_name": string;
  "pioneer_list": Pioneer[]
}

const sampleGroupInfo = [{
  "group_id": 0,
  "group_name": "구디 대한족발 팟",
  "pioneer_list": [
    { "pioneer_id": "user00", "pioneer_nickname": "SONG", "pioneer_image_url": "" },
    { "pioneer_id": "user01", "pioneer_nickname": "JuneHyung", "pioneer_image_url": "" },
    { "pioneer_id": "user02", "pioneer_nickname": "Soon", "pioneer_image_url": "" }
  ],
},{
  "group_id": 1,
  "group_name": "미식도 내이름은 비룡",
  "pioneer_list": [
    { "pioneer_id": "user00", "pioneer_nickname": "SONG", "pioneer_image_url": "" },
    { "pioneer_id": "user01", "pioneer_nickname": "JuneHyung", "pioneer_image_url": "" },
    { "pioneer_id": "user02", "pioneer_nickname": "Soon", "pioneer_image_url": "" }
  ],
},{
  "group_id": 2,
  "group_name": "구디 대한족발 팟2",
  "pioneer_list": [
    { "pioneer_id": "user00", "pioneer_nickname": "SONG", "pioneer_image_url": "" },
    { "pioneer_id": "user01", "pioneer_nickname": "JuneHyung", "pioneer_image_url": "" },
    { "pioneer_id": "user02", "pioneer_nickname": "Soon", "pioneer_image_url": "" }
  ],
}]

const GroupList = () => {
  return (
    <ul className={style.group_list}>
      {sampleGroupInfo.map((info)=>{
        return <GroupListItem key={info.group_id} info={info}/>
      })}
    </ul>
  )
}

export default GroupList;