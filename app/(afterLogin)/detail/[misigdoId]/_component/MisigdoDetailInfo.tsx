"use client";

// import { useEffect, useState } from "react";
// import { ResultDummy, Round } from "@/app/(afterLogin)/home/page";
import ImageList from "@/app/(afterLogin)/_component/ImageList";
import Profile from "@/app/(afterLogin)/_component/Profile";
import style from "./../misigdoDetail.module.scss";
import ReviewList from "@/app/(afterLogin)/_component/ReviewList";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMisigdoItemByMisigdoId } from "../_lib/getMisigdoItemByMisigdoId";
import { useState } from "react";
import { useMapStore } from "@/app/store/map";

const MisigdoDetailInfo = () => {

  // const [info, setInfo] = useState<ResultDummy>({} as ResultDummy);
  const [activeRound, setActiveRound] = useState(0);
  const mapStore = useMapStore();
  const params = useParams();
  const misigdoId = params.misigdoId as string;
  
  const {data: misigdoItem, isError, error ,isLoading} = useQuery({
    queryKey: ['getMisigdoItemByMisigdoId', misigdoId],
    queryFn: getMisigdoItemByMisigdoId,
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  if(!misigdoItem) return null;

  const handleActiveRound = (round: number) => {setActiveRound(round)}
  
  return (
    <>
      <ImageList images={misigdoItem.data.round.review_image} />
      <div className={style.top_area}>
        <Profile />
        <p>
          <span className={style.pioneer_name}>{misigdoItem.data.boss.boss_nickname}</span> {misigdoItem.data.pioneer_list.length > 0 && <span className={style.other_name}>외 {misigdoItem.data.pioneer_list.length}명</span>}
        </p>
        <p className={style.write_date}>{misigdoItem.data.metting_date}</p>
      </div>
      <div className={style.middle_area}>
        <ul className={style.round_list}>
          {Array.from({ length: misigdoItem.data.round.length }, () => null).map((r, rIdx) => {
            return <li className={rIdx===activeRound ? `${style.round_item} ${style.active_item} `: style.round_item} key={`round${rIdx}`} onClick={()=>handleActiveRound(rIdx)}>{`${rIdx + 1}차`}</li>;
          })}
        </ul>
      </div>
      <h2>
        {misigdoItem.data.round[activeRound].restaurant_name} <span>{misigdoItem.data.round[activeRound].cost.toLocaleString()}</span>
      </h2>
      <div className={style.middle_description_area}>
        <div className={style.middle_left_section}>
          <p>메뉴 : {misigdoItem.data.round[activeRound].main_menu_name}</p>
          <p>서브 메뉴 : {misigdoItem.data.round[activeRound].side_menu_name}</p>
          <p>주류 메뉴 : {misigdoItem.data.round[activeRound].drink_name}</p>
          <p>디저트 : {misigdoItem.data.round[activeRound].dessert_name}</p>
        </div>
        <div className={style.middle_right_section}>
          <p>주소 : {misigdoItem.data.round[activeRound].restaurant_addr}</p>
          <div className={style.map_box}>map</div>
        </div>
      </div>
      <ReviewList />
    </>
  );
};

export default MisigdoDetailInfo;
