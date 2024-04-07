import { ChangeEvent, Dispatch, SetStateAction } from "react";
import style from "./searchInput.module.scss";
import MdiIcon from "./MdiIcon";

type SearchInputProps = {
  value?: string;
  handleValue?: Dispatch<SetStateAction<string>>;
  onClick?: ()=>Promise<void>;
}

const SearchInput = ({value, handleValue, onClick}: SearchInputProps) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    
    if(handleValue) handleValue(e.target.value);
    console.log(2, value);
    
  }
  return (
    <div className={style.search_input_wrap}>
      <input className={style.search_input} onChange={onChange} value={value}/>
      {
      onClick 
      ? <button className={style.search_button} onClick={()=>onClick()}>
        <MdiIcon path={"mdiMagnify"} color={'#2DC770'}/>
      </button> 
      : <button className={style.search_button}>
        <MdiIcon path={"mdiMagnify"} color={'#2DC770'}/>
        </button>}
      
    </div>
  )
}

export default SearchInput;