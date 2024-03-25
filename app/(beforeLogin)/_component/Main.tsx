import Link from "next/link";
import style from "./main.module.scss";

const Main = () => {
  return (
    <div className={style.main_container}>
      <div className={style.logo_image}>
        <video autoPlay muted loop playsInline>
          <source src={"/mido.mp4"} type="video/mp4"></source>
        </video>
      </div>
      <div className={style.login_container}>
        <h3 className={style.start_message}>3초만에 시작하기</h3>
        <nav className={style.nav_container}>
          <Link href="/home" className={`${style.nav_item}`} />
          <Link href="/home" className={`${style.nav_item}`}/>
          <Link href="/home" className={style.nav_item}/>
        </nav>
      </div>
    </div>
  );
};

export default Main;
