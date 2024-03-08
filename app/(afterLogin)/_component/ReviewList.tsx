import ReviewItem from "./ReviewItem";
import style from "./review.module.scss";
const ReviewList = () => {
  return (
    <>
    <h2 className={style.review_title}>리뷰</h2>
    <ul className={style.review_list}>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </ul>
    </>
  )
}

export default ReviewList;