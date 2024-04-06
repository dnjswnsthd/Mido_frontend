"use client";
import { useState } from "react";
import SearchInput from "../../_component/SearchInput";
import style from "./misigdoForm.module.scss";
const GroupSearch = () => {
  const [keyword, setKeyword] = useState("");
  const handleClick = async () => {
    return;
  };
  return (
    <div className={style.group_search}>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      <ul className={style.user_list} />
    </div>
  );
};

export default GroupSearch;
