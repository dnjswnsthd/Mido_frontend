"use client";

import style from "./main.module.scss";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const handleOnClick = async (type: "naver" | "kakao" | "google") => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors"},
        body: JSON.stringify({type})
      });

      // const data = await response.json();

      if (response.ok) {
        router.replace("/home");
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className={style.main_container}>
      <Logo />
      <div className={style.login_container}>
        <h3 className={style.start_message}>3초만에 시작하기</h3>
        <nav className={style.nav_container}>
          <button className={`${style.nav_item}`} onClick={() => handleOnClick("kakao")} />
          <button className={`${style.nav_item}`} onClick={() => handleOnClick("naver")} />
          <button className={style.nav_item} onClick={() => handleOnClick("google")} />
        </nav>
      </div>
    </div>
  );
};

export default Main;
