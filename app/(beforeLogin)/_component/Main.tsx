import style from "./main.module.scss";
import Logo from "./Logo";
import SocialLoginButton from "./SocialLoginButton";

const Main = () => {
  return (
    <div className={style.main_container}>
      <Logo />
      <div className={style.login_container}>
        <h3 className={style.start_message}>3초만에 시작하기</h3>
        <nav className={style.nav_container}>
          <SocialLoginButton type="kakao"/>
          <SocialLoginButton type="naver"/>
          <SocialLoginButton type="google"/>
        </nav>
      </div>
    </div>
  );
};

export default Main;
