import SearchInput from "../../_component/SearchInput";
import style from "./misigdoForm.module.scss";
const GroupSearch = () => {
  return (
    <div className={style.group_search}>
      <SearchInput />
      <ul className={style.user_list} />
    </div>
  )
}

export default GroupSearch;