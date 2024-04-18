"use client";
import { MouseEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./imageList.module.scss";
import Image from "next/image";
import MdiIcon from "./MdiIcon";
import { useModalStore } from "@/app/store/modal";

const ImageList = ({ images }: any) => {
  const [idx, setIdx] = useState(0);
  const modalStore = useModalStore();
  const router = useRouter();

  const nextImage = () => {
    if (images.length > 0) {
      setIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
    }
  };
  const prevImage = () => {
    if (images.length > 0) {
      setIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
    }
  };

  const handleDetail = (e: MouseEvent<HTMLImageElement>) => {
    if (modalStore.mode === "thumbnail") {
      modalStore.setImageList(images);
      router.push("/photo");
    } else {
      e.preventDefault();
    }
  };

  return (
    images && (
      <ul className={style.image_list}>
        {images.length > 0 && (
          <div className={style.prev_button} onClick={prevImage}>
            <MdiIcon path="mdiLessThan" size={20} />
          </div>
        )}

        <li className={style.image_item}>{images.length > 0 && <Image src={images[idx]} alt={`Image${idx + 1}`} priority fill sizes={"inherit inherit"} quality={75} onClick={handleDetail} />}</li>
        <div className={style.next_button} onClick={nextImage}>
          {images.length > 0 && <MdiIcon path="mdiGreaterThan" size={20} />}
        </div>
      </ul>
    )
  );
};

export default ImageList;
