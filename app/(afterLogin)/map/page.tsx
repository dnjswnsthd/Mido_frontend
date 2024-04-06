"use client";

import { useCallback, useState } from "react";
import SearchInput from "../_component/SearchInput";
import style from "./map.module.scss";
import Link from "next/link";
import KakaoMap from "./_component/KakaoMap";
const MapPage = () => {
  const [keyword, setKeyword] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [misigdoList, setMisigdoList] = useState([]);
  const [page, setPage] = useState(1);
  const getMapList =useCallback( async () => {
    try {
      const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", userId);
      queryParams.append("search", keyword);
      queryParams.append("page", page.toString());
      
      const response = await fetch(`http://localhost:3001/api/map/addressList?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
      });
      
      if (response.ok) {
        const { data } = await response.json();
        setMisigdoList(data);
        setIsSearch(true);
      } else {
        setIsSearch(false);
        console.log("err");
      }
    } catch (err) {
      setIsSearch(false);
      console.error(err);
    }
  },[keyword, page]);
  return (
    <KakaoMap className={style.map_page_container} markList={misigdoList}>
      <div className={style.map_content}>
        <SearchInput value={keyword} handleValue={setKeyword} onClick={getMapList} />
      </div>
      {isSearch && (
        <Link href="/map/search" className={style.show_search_list}>
          목록보기
        </Link>
      )}
    </KakaoMap>
  );
};

export default MapPage;
