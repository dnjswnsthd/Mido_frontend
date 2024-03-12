import ImageList from "./ImageList";
import style from "./review.module.scss";
const ReviewItem = () =>{
  const imgList = [
    "https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583434987437-1b9dcbe44c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1603052227529-e8ed43c7af99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
  ]
  return (
    <li className={style.review_item}>
      <div className={style.top_area}>
        <div className={style.profile} />
        <p className={style.pioneer_name}>JuneHyung</p>
      </div>
      <div className={style.middle_area}>
        <ImageList images={imgList}/>
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