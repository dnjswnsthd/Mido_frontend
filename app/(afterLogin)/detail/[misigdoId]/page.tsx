"use client";

import { useEffect, useState } from "react";
import style from "./misigdoDetail.module.scss";
import { useParams } from "next/navigation";
import { ResultDummy } from "../../home/page";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import MisigdoDetailInfo from "./_component/MisigdoDetailInfo";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const MisigdoDetail = () => {
  const [info, setInfo] = useState<ResultDummy>({} as ResultDummy);
  const [activeRound, setActiveRound] = useState(0);

  const params = useParams();

  const getItemInfo = async () => {
    try {
      const queryParams = new URLSearchParams();
      queryParams.append("groupId", params.misigdoId as string);

      const response = await fetch(`http://localhost:3001/api/misigdo/item?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
      });

      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        setInfo(data);
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <div className={style.misigdo_detail_page}>
      {info.round && <MisigdoDetailInfo r={info.round[activeRound]} round_cnt={info.round.length} boss={info.boss} metting_date={dayjs(info.metting_date).fromNow()} pioneer_cnt={info.pioneer_list.length-1}/>}
    </div>
  );
};

export default MisigdoDetail;
