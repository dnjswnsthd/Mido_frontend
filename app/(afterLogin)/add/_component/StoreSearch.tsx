import SearchInput from "../../_component/SearchInput";
import style from "./misigdoForm.module.scss";
const StoreSearch = () => {
  return (
    <div className={style.store_search}>
      <SearchInput />
      <p>매장 주소 내용</p>
    </div>
  )
}

export default StoreSearch;