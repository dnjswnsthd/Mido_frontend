import style from "./groupListPage.module.scss";
import GroupList from "./_component/GroupList";
import MdiIcon from "../_component/MdiIcon";
import Link from "next/link";
import { Pioneer } from "../home/page";

export interface Boss {
  boss_id: string;
  boss_nickname: string;
  boss_image_url: string;
}
export interface GroupInfo {
  group_id: number;
  group_name: string;
  pioneer_list: Pioneer[];
  boss: Boss;
}

const GroupListPage = () => {
  return (
    <div className={style.group_list_page}>
      <div className={style.top_area}>
        <h2>그룹</h2>
        <div className={style.button_area}>
          <MdiIcon path={"mdiMagnify"} size={20} />

          <button>
            <Link href={"/group/add"}>
              <MdiIcon path={"mdiPlusBoxMultipleOutline"} size={20} />
            </Link>
          </button>
        </div>
      </div>
      <GroupList />
    </div>
  );
};

export default GroupListPage;
