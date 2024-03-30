import Image from "next/image";
import style from "./logo.module.scss";
const StartSection = () => {
  const startTitle = "맛집을 정복하다".split("");
  const hashTagList = [
    "#우리 모임 맛지도",
    "#나만 아는 맛집",
    "#맛집 검색",
    "#JMTGR",
    "#이 달의 핫한 장소",
    "#모임 메뉴",
    "#회식 가능 맛집",
    "#MZ맛집",
  ].map(el=> el.split(''));
  return (
    <div className={style.start_box}>
      <div className={style.start_logo_image}>
        <Image src={"/image/mido.png"} alt="logo" width={300} height={150} priority/>
      </div>
      <h1 className={style.start_title}>
        {startTitle.map((char, cIdx) => {
          return (
            <span
              className={style.title_letter}
              key={`${char}${cIdx}`}
              style={{ animationDelay: `${cIdx * 0.5}s` }}
            >
              {char}
            </span>
          );
        })}
      </h1>
      <ul className={style.hash_tag_list}>
        {hashTagList.map((hashTag, idx) => {
          return (
            <li
              key={hashTag.join('')}
              className={style.hash_tag}
              style={{ animationDelay: `${idx * 0.6}s` }}
            >
              {hashTag.map((char, cIdx) => {
                return (
                  <span
                    key={`${hashTag}_${char}${cIdx}`}
                    className={style.letter}
                    style={{ animationDelay: `${5 + idx + cIdx * 0.1}s` }}
                  >
                    {char}
                  </span>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StartSection;
