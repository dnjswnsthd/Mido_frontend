import { Dispatch, SetStateAction } from "react";
import style from "./searchInput.module.scss";
const SearchInput = ({isSearch, onClick}: {isSearch?: boolean, onClick?: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className={style.search_input_wrap}>
      <input className={style.search_input}/>
      {onClick ? <button className={style.search_button} onClick={()=>onClick(!isSearch)}>S</button> : <button className={style.search_button}>S</button>}
      
    </div>
  )
}

export default SearchInput;