"use client"
import { useRouter } from "next/navigation";
import style from "./main.module.scss";

type SocailLoginButtonProps = {
  type: 'naver' | 'google' | 'kakao'
}
const SocialLoginButton = ({type}: SocailLoginButtonProps) => {
  const router = useRouter();
  const handleOnClick = async (type: "naver" | "kakao" | "google") => {
    try {
      const response = await fetch(`http://localhost:3001/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors"},
        body: JSON.stringify({type})
      });

      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('userInfo', JSON.stringify(data));
        router.replace("/home");
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return <button className={`${style.nav_item}`} onClick={() => handleOnClick("kakao")} />
}
export default SocialLoginButton;