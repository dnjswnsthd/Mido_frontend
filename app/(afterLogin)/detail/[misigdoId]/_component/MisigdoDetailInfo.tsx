import ImageList from "@/app/(afterLogin)/_component/ImageList";
import Profile from "@/app/(afterLogin)/_component/Profile";
import style from "./../misigdoDetail.module.scss";
import { ResultDummy, Round } from "@/app/(afterLogin)/home/page";
import ReviewList from "@/app/(afterLogin)/_component/ReviewList";

export type MisigdoDetailInfoProps = {
  r: Round;
  round_cnt: number;
  boss: ResultDummy["boss"];
  metting_date: ResultDummy["metting_date"];
};

const MisigdoDetailInfo = ({ r, round_cnt, boss, metting_date }: MisigdoDetailInfoProps) => {
  return (
    <>
      <ImageList images={r.review_image} />
      <div className={style.top_area}>
        <Profile />
        <p>
          <span className={style.pioneer_name}>{boss.boss_nickname}</span> <span className={style.other_name}>외 2명</span>
        </p>
        <p className={style.write_date}>{metting_date}</p>
      </div>
      <div className={style.middle_area}>
        <ul className={style.round_list}>
          {Array.from({ length: round_cnt }, () => null).map((r, rIdx) => {
            return <li className={style.round_item} key={`round${rIdx}`}>{`${rIdx + 1}차`}</li>;
          })}
        </ul>
      </div>
      <h2>
        {r.restaurant_name} <span>{r.cost.toLocaleString()}</span>
      </h2>
      <div className={style.middle_description_area}>
        <div className={style.middle_left_section}>
          <p>메뉴 : {r.main_menu_name}</p>
          <p>서브 메뉴 : {r.side_menu_name}</p>
          <p>주류 메뉴 : {r.drink_name}</p>
          <p>디저트 : {r.dessert_name}</p>
        </div>
        <div className={style.middle_right_section}>
          <p>주소 : {r.restaurant_addr}</p>
          <div className={style.map_box}>map</div>
        </div>
      </div>
      <ReviewList />
    </>
  );
};

export default MisigdoDetailInfo;
