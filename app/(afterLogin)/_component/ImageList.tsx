"use client";
import { useEffect, useState } from "react";
import style from "./imageList.module.scss";
import Image from "next/image";
import MdiIcon from "./MdiIcon";

const ImageList = ({images}: any) => {
  const [idx, setIdx] = useState(0);
  const nextImage = () => {
    if(images.length>0){
      setIdx((prevIdx)=> prevIdx===images.length-1 ? 0 : (prevIdx+1))
    }
  }
  const prevImage = () => {
    if(images.length>0){
      setIdx((prevIdx)=> prevIdx===0 ? images.length-1 : prevIdx -1)
    }
  }

  return (
    <ul className={style.image_list}>
      <div className={style.prev_button} onClick={prevImage}><MdiIcon path="mdiLessThan" size={20}/></div>
      
      <li className={style.image_item}>
        <Image src={images[idx]} alt={`Image${idx+1}`} priority fill sizes={'inherit inherit'} quality={75}/>
      </li>
      <div className={style.next_button} onClick={nextImage}>
        <MdiIcon path="mdiGreaterThan" size={20}/>
      </div>
    </ul>
  )
}

export default ImageList;