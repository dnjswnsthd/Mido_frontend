import ImageList from "../../_component/ImageList";
import ReviewList from "../../_component/ReviewList";
import style from "./misigdoDetail.module.scss";
const imgList = [
  "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
]
const MisigdoDetail = () => {
  return (
    <div className={style.misigdo_detail_page}>
      <ImageList images={imgList}/>
      <div className={style.top_area}>
        <div className={style.profile}></div>
        <p>
          <span className={style.pioneer_name}>JuneHyung</span> <span className={style.other_name}>외 2명</span>
        </p>
        <p className={style.write_date}>2month ago</p>
      </div>
      <div className={style.middle_area}>
        <ul className={style.round_list}>
          <li className={style.round_item}>1차</li>
          <li className={style.round_item}>2차</li>
          <li className={style.round_item}>3차</li>
        </ul>
        <h2>
          대한민족 <span>155,000</span>
        </h2>
      </div>
      <div className={style.middle_description_area}>
        <div className={style.middle_left_section}>
          <p>메뉴 : 족발, 족발</p>
          <p>서브 메뉴 : 족발, 족발</p>
          <p>주류 메뉴 : 족발, 족발</p>
          <p>디저트 : 족발, 족발</p>
        </div>
        <div className={style.middle_right_section}>
          <p>주소 : 서울특별시 구로구 구로동 디지털32나길 17-8</p>
          <div className={style.map_box}>map</div>
        </div>
      </div>
      <ReviewList />
    </div>
  );
};

export default MisigdoDetail;
