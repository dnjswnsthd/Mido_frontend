import Link from "next/link";
import style from "./misigdoItem.module.scss";
import ImageList from "./ImageList";
const MisigdoItem = () => {
  const imgList = [
    "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ]
  return (
    <li className={style.misigdo_item}>
      <div className={style.misigdo_top_area}>
        <div className={style.pioneer_wrap}>
          <div className={style.profile_image} />
          <p>
            <span className={style.boss_name}>JuneHyung</span> <span className={style.member_name}>외 2명</span>
          </p>
          <p className={style.write_date}>2month ago</p>
        </div>
        <Link href="/detail/id" className={style.more_button}>더보기</Link>
      </div>
      <div className={style.misigdo_bottom_area}>
        <section className={style.content_left_section}>
          <ImageList images={imgList} />
        </section>
        <section className={style.content_right_section}>
          <div className={style.content_title}>
            <h3>대한 민족</h3>
            <div>★★★★☆</div>
          </div>
          <div className={style.content_menu_row}>
            <div>메뉴 : 족발, 족발</div>
            <div>서브 메뉴 : 좌족발, 우족발</div>            
          </div>
          <div className={style.content_menu_row}>
            <div>주류 : 테라, 참이슬</div>
            <div>디저트 : 족발, 족발</div>            
          </div>
          <div className={style.content_address}>
            <div>주소</div><span>서울특별시 구로구 구로동디지털로32나길 17-8</span>
          </div>
          <ul className={style.content_review_chart_wrap}>
            <li className={style.content_review_chart_item}>
              <span>음식</span>
              <div className={style.content_review_chart}>
                <div className={style.content_review_value_chart}></div>
                <div className={style.content_review_average_chart}></div>
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>서비스</span>
              <div className={style.content_review_chart}>
                <div className={style.content_review_value_chart}></div>
                <div className={style.content_review_average_chart}></div>
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>가격</span>
              <div className={style.content_review_chart}>
                <div className={style.content_review_value_chart}></div>
                <div className={style.content_review_average_chart}></div>
              </div>
            </li>
            <li className={style.content_review_chart_item}>
              <span>맛</span>
              <div className={style.content_review_chart}>
                <div className={style.content_review_value_chart}></div>
                <div className={style.content_review_average_chart}></div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </li>
  );
};

export default MisigdoItem;
