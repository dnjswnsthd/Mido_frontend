import Link from "next/link";
import style from "./misigdoItem.module.scss";
import ImageList from "./ImageList";
import MeterBar from "./MeterBar";
import { ResultDummy } from "../home/page";

interface MisigdoItemProps {info: ResultDummy}
const MisigdoItem = ({info}: MisigdoItemProps) => {
  const imgList = [
    "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <li className={style.misigdo_item}>
      <h1>{info.group_name}</h1>
      <div className={style.misigdo_top_area}>
        <div className={style.pioneer_wrap}>
          <div className={style.profile_image} />
          <p>
            <span className={style.boss_name}>{info.boss_nickname}</span> <span className={style.member_name}>외 {info.pioneer_list.length-1}명</span>
          </p>
          <p className={style.write_date}>2month ago</p>
        </div>
        <Link href="/detail/id" className={style.more_button}>
          더보기
        </Link>
      </div>
      <div className={style.misigdo_bottom_area}>
        <section className={style.content_left_section}>
          <ImageList images={info.round[0].review_image} />
        </section>
        <section className={style.content_right_section}>
          <div className={style.content_title}>
            <h3>{info.round[0].restaurant_name}</h3>
            <div>{info.round[0].evaluation.total_score}</div>
          </div>
          <div className={style.content_menu_row}>
            <div>메뉴 : {info.round[0].main_menu_name}</div>
            <div>서브 메뉴 : {info.round[0].side_menu_name}</div>
          </div>
          <div className={style.content_menu_row}>
            <div>주류 : {info.round[0].drink_name}</div>
            <div>디저트 : {info.round[0].dessert_name}</div>
          </div>
          <div className={style.content_address}>
            <div>주소</div>
            <span> {info.round[0].restaurant_addr}</span>
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
