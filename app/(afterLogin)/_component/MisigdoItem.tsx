'use client';

import style from "./misigdoItem.module.scss";
import ImageList from "./ImageList";
import MeterBar from "./MeterBar";
import { ResultDummy } from "../home/page";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import Profile from "./Profile";
import { useRouter } from "next/navigation";
dayjs.locale("ko");
dayjs.extend(relativeTime);

interface MisigdoItemProps {
  info: ResultDummy;
}
const MisigdoItem = ({ info }: MisigdoItemProps) => {
  const router = useRouter();
  const handleMoreButton = () => {
    router.push(`/detail/${info.group_id}`)
  }
  return (
    <li className={style.misigdo_item}>
      <div className={style.misigdo_top_area}>
        <h1 className={style.title_wrap}>
          {info.group_name}
          <button className={style.more_button} onClick={()=>handleMoreButton()}> 더보기 </button>
        </h1>
        <div className={style.pioneer_wrap}>
          {/* {info.boss.boss_id ? <div className={style.profile_image}><Image src={info.boss.boss_image_url} alt="profile" /></div> : <MdiIcon path="mdiAccountCircle" /> } */}
          <Profile url={info.boss.boss_image_url} />
          
          <p className={style.boss_wrap}>
            <span className={style.boss_name}>{info.boss.boss_nickname}</span> <span className={style.member_name}>외 {info.pioneer_list.length - 1}명</span>
          </p>
          <p className={style.write_date}>{dayjs(info.metting_date).fromNow()}</p>
        </div>
      </div>
      <div className={style.misigdo_bottom_area}>
        <section className={style.content_left_section}>
          <ul className={style.content_round_list}>
            {info.round.map((_,i)=><li key={`${_.round_id}${_.round_num}${i}`} className={i===1 ? `${style.content_round_item} ${style.active_item}` : style.content_round_item}>{i+1}차</li>)}
          </ul>
          <ImageList images={info.round[0].review_image} />
        </section>
        <section className={style.content_right_section}>
          <div className={style.content_title}>
            <h3>{info.round[0].restaurant_name}</h3>
            <div>{info.round[0].evaluation.total_score}</div>
          </div>
          <div className={style.content_menu_row}>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>메인 : </span> <span className={style.content_menu_value}>{info.round[0].main_menu_name}</span>
            </p>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>서브 : </span> <span className={style.content_menu_value}>{info.round[0].side_menu_name}</span>
            </p>
          </div>
          <div className={style.content_menu_row}>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>주류 : </span>
              <span className={style.content_menu_value}>{info.round[0].drink_name}</span>
            </p>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>디저트 : </span>
              <span className={style.content_menu_value}>{info.round[0].dessert_name}</span>
            </p>
          </div>
          <div className={style.content_address}>
            <span className={style.content_address_label}>주소 : </span>
            <span className={style.content_address_value}> {info.round[0].restaurant_addr}</span>
          </div>

          <ul className={style.content_review_chart_wrap}>
            <li className={style.content_review_chart_item}>
              <span>음식</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[0].average_evaluation.food_score} kind="average" />
                <MeterBar value={info.round[0].evaluation.food_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>서비스</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[0].average_evaluation.service_score} kind="average" />
                <MeterBar value={info.round[0].evaluation.service_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>가격</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[0].average_evaluation.price_score} kind="average" />
                <MeterBar value={info.round[0].evaluation.price_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>분위기</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[0].average_evaluation.atmosphere_score} kind="average" />
                <MeterBar value={info.round[0].evaluation.atmosphere_score} kind="target" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </li>
  );
};

export default MisigdoItem;
