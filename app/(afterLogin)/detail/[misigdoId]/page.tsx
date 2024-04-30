import style from "./misigdoDetail.module.scss";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import MisigdoDetailInfo from "./_component/MisigdoDetailInfo";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const MisigdoDetail = () => {
  return (
    <div className={style.misigdo_detail_page}>
      <MisigdoDetailInfo />
    </div>
  );
};

export default MisigdoDetail;
