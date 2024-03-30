import style from "./logo.module.scss";
const EndSection = () => {
  return (
    <div className={style.end_box}>
      <h1 className={style.end_title}>지금 바로 시작하세요!</h1>
      <ul className={style.arrow_list}>
        <li className={style.arrow_down} />
        <li className={style.arrow_down} />
        <li className={style.arrow_down} />
      </ul>
    </div>
  );
};

export default EndSection;
