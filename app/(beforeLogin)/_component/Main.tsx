import Link from "next/link";
import style from "./main.module.scss";
const Main = () => {
  return (
    <>
      <div className={style.test_link}>
        <Link href="/home">로그인</Link>
      </div>
    </>
  )
}

export default Main;