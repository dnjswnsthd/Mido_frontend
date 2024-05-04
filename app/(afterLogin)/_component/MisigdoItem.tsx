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
import { useState } from "react";
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
  const [activeRound, setAcitveRound] = useState(0);
  const handleActiveRound = (idx: number) => {setAcitveRound(idx)}
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
            {info.round.map((_,i)=><li key={`${_.round_id}${_.round_num}${i}`} className={i===activeRound ? `${style.content_round_item} ${style.active_item}` : style.content_round_item} onClick={()=>handleActiveRound(i)}>{i+1}차</li>)}
          </ul>
          <ImageList images={info.round[activeRound].review_image} />
        </section>
        <section className={style.content_right_section}>
          <div className={style.content_title}>
            <h3>{info.round[activeRound].restaurant_name}</h3>
            <div>{info.round[activeRound].evaluation.total_score}</div>
          </div>
          <div className={style.content_menu_row}>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>메인 : </span> <span className={style.content_menu_value}>{info.round[activeRound].main_menu_name}</span>
            </p>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>서브 : </span> <span className={style.content_menu_value}>{info.round[activeRound].side_menu_name}</span>
            </p>
          </div>
          <div className={style.content_menu_row}>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>주류 : </span>
              <span className={style.content_menu_value}>{info.round[activeRound].drink_name}</span>
            </p>
            <p className={style.content_menu_wrap}>
              <span className={style.content_menu_label}>디저트 : </span>
              <span className={style.content_menu_value}>{info.round[activeRound].dessert_name}</span>
            </p>
          </div>
          <div className={style.content_address}>
            <span className={style.content_address_label}>주소 : </span>
            <span className={style.content_address_value}> {info.round[activeRound].restaurant_addr}</span>
          </div>

          <ul className={style.content_review_chart_wrap}>
            <li className={style.content_review_chart_item}>
              <span>음식</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[activeRound].average_evaluation.food_score} kind="average" />
                <MeterBar value={info.round[activeRound].evaluation.food_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>서비스</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[activeRound].average_evaluation.service_score} kind="average" />
                <MeterBar value={info.round[activeRound].evaluation.service_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>가격</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[activeRound].average_evaluation.price_score} kind="average" />
                <MeterBar value={info.round[activeRound].evaluation.price_score} kind="target" />
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>분위기</span>
              <div className={style.content_review_chart}>
                <MeterBar value={info.round[activeRound].average_evaluation.atmosphere_score} kind="average" />
                <MeterBar value={info.round[activeRound].evaluation.atmosphere_score} kind="target" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </li>
  );
};

export default MisigdoItem;
