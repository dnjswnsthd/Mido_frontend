"use client";
import { useEffect, useState } from "react";
import style from "./imageList.module.scss";
import Image from "next/image";

const ImageList = ({images}: any) => {
  const [idx, setIdx] = useState(0);
  const nextImage = () => {
    setIdx((prevIdx)=> prevIdx===images.length-1 ? 0 : (prevIdx+1))
  }
  const prevImage = () => {
    setIdx((prevIdx)=> prevIdx===0 ? images.length-1 : prevIdx -1)
  }

  return (
    <ul className={style.image_list}>
      <div className={style.prev_button} onClick={prevImage}>&lt;</div>
      <li className={style.image_item}>
        <Image src={images[idx]} layout="intrinsic"  alt={`Image${idx+1}`} width={600} height={400}/>
      </li>
      <div className={style.next_button} onClick={nextImage}>&gt;</div>
    </ul>
  )
}

export default ImageList;