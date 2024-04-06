"use client";
import { useState } from "react";
import SearchInput from "../../_component/SearchInput";
import style from "./misigdoForm.module.scss";
const StoreSearch = () => {
  const [keyword, setKeyword] = useState("");
  const handleClick = async () => {
    return;
  };
  return (
    <div className={style.store_search}>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      <p>매장 주소 내용</p>
    </div>
  );
};

export default StoreSearch;
