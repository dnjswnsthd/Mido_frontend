import { Dispatch, SetStateAction } from "react";
import style from "./searchInput.module.scss";
import MdiIcon from "./MdiIcon";
const SearchInput = ({isSearch, onClick}: {isSearch?: boolean, onClick?: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className={style.search_input_wrap}>
      <input className={style.search_input}/>
      {
      onClick 
      ? <button className={style.search_button} onClick={()=>onClick(!isSearch)}>
        <MdiIcon path={"mdiMagnify"} color={'#2DC770'}/>
      </button> 
      : <button className={style.search_button}></button>}
      
    </div>
  )
}

export default SearchInput;