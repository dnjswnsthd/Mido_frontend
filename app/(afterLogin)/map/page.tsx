"use client";

import { useState } from "react";
import SearchInput from "../_component/SearchInput";
import style from "./map.module.scss";
import Link from "next/link";
const MapPage = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className={style.map_page_container}>
      <div className={style.map_content}>
        <SearchInput isSearch={isSearch} onClick={setIsSearch}/>
      </div>
      {isSearch 
        && (<Link href="/map/search" className={style.show_search_list}>목록보기</Link>)}
    </div>
  )
}

export default MapPage;