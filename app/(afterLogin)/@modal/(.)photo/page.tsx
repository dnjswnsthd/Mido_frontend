'use client';
import { useState, useEffect, MouseEvent } from "react";
import { useRouter } from "next/navigation";
import style from "./imageModal.module.scss";
import Image from "next/image";
// import ImageList from "./../../_component/ImageList";
import MdiIcon from "./../../_component/MdiIcon";
import { useModalStore } from "@/app/store/modal";
const ImageModal = () => {
  const modalStore = useModalStore();
  const router = useRouter();
  const [idx, setIdx] = useState(0);

  const nextImage = (e: MouseEvent<HTMLDivElement>) => {
    console.log('next')
    e.preventDefault();
    if (modalStore.imageList.length > 0) {
      setIdx((prevIdx) => (prevIdx === modalStore.imageList.length - 1 ? 0 : prevIdx + 1));
    }
  };
  const prevImage = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (modalStore.imageList.length > 0) {
      setIdx((prevIdx) => (prevIdx === 0 ? modalStore.imageList.length - 1 : prevIdx - 1));
    }
  };
  useEffect(()=>{
    // console.log(modalStore.imageList)
    modalStore.setMode('modal')
  }, [])

  const closeModal = () => {
    modalStore.reset();
    router.back();
  }
  return (
    <div className={style.modal_outter_box} onClick={closeModal}>
      {
        modalStore.imageList && 
        <ul className={style.image_list} onClick={e => e.stopPropagation()}>
        {modalStore.imageList.length > 0 && (
          <div className={style.prev_button} onClick={prevImage}>
            <MdiIcon path="mdiLessThan" size={20} />
          </div>
        )}

        <li className={style.image_item}>{modalStore.imageList.length > 0 && <Image src={modalStore.imageList[idx]} alt={`Image${idx + 1}`} priority fill sizes={"inherit inherit"} quality={75} />}</li>
        <div className={style.next_button} onClick={nextImage}>
          {modalStore.imageList.length > 0 && <MdiIcon path="mdiGreaterThan" size={20} />}
        </div>
      </ul>
      // <ImageList list={modalStore.imageList}/>
      }
    </div>
  )
}

export default ImageModal;