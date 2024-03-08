import MisigdoItem from "../_component/MisigdoItem";
import style from "./home.module.scss";
const Home = () => {
  return (
    <div className={style.home_page_container}>
      <h1 className={style.home_page_title}></h1>
      <ul className={style.misigdo_list}>
        <MisigdoItem />
        <MisigdoItem />
        <MisigdoItem />
        <MisigdoItem />
        <MisigdoItem />
        <MisigdoItem />
      </ul>
    </div>
  )
}

export default Home;