import ImageList from "./ImageList";
import style from "./review.module.scss";
const ReviewItem = () =>{
  return (
    <li className={style.review_item}>
      <div className={style.top_area}>
        <div className={style.profile} />
        <p className={style.pioneer_name}>JuneHyung</p>
      </div>
      <div className={style.middle_area}>
        <ImageList />
        <div className={style.right_area}>
          <p>맛 : ★★★★★</p>
          <p>가격 : ★★★★★</p>
          <p>서비스 : ★★★★★</p>
          <p>분위기 : ★★★★★</p>
        </div>
      </div>
      <div className={style.bottom_area}>
      반찬 셀프 ! 부추 꽤나 맛있습니다. <br/>
      양파 장아찌 괜찮습니다. <br/>
      김치 안먹어봐서 모르겠습니다 <br/>
      오뎅탕은 서비스로 원래 나오는 것 같고, 인스타....
      </div>
    </li>
  )
}

export default ReviewItem;