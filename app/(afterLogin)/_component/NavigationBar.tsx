import Link from "next/link";
import style from "./navigationBar.module.scss";
const NavigationBar = () => {
  return (
    <nav className={style.navigation_bar}>
      <Link href="/" className={style.navigation_item}>H</Link>
      <Link href="/" className={style.navigation_item}>M</Link>
      <Link href="/" className={style.navigation_item}>A</Link>
      <Link href="/" className={style.navigation_item}>G</Link>
      <Link href="/" className={style.navigation_item}>U</Link>
    </nav>
  )
}

export default NavigationBar;