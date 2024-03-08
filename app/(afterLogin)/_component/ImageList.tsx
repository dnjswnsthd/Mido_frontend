"use client";
import style from "./imageList.module.scss";

const ImageList = () => {
  return (
    <ul className={style.image_list}>
      <div className={style.prev_button}>&lt;</div>
      <li className={style.image_item}>Image</li>
      <div className={style.next_button}>&gt;</div>
    </ul>
  )
}

export default ImageList;