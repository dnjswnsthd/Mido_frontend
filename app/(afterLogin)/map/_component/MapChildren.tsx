"use client";

import { useCallback, useState } from "react";
import SearchInput from "../../_component/SearchInput";
import style from "../map.module.scss";
import Link from "next/link";
import { getMapListByKeyword } from "../_lib/getMapListByKeyword";
import { useMapStore } from "@/app/store/map";
const MapChildren = () => {
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const mapStore = useMapStore();
  const [page, setPage] = useState(1);
  const getMapList = useCallback(async () => {
    try {
      const {data} = await getMapListByKeyword(page, keyword);
      if (data) {
        mapStore.setMarkList(data);
        setIsSearch(true);
      } else {
        setIsSearch(false);
        console.log("err");
      }
    } catch (err) {
      setIsSearch(false);
      console.error(err);
    }
  }, [keyword, page]);
  return (
    <>
      <div className={style.map_content}>
        <SearchInput value={keyword} handleValue={setKeyword} onClick={getMapList} />
      </div>
      {isSearch && (
        <Link href="/map/search" className={style.show_search_list}>
          목록보기
        </Link>
      )}
    </>
  );
};

export default MapChildren;
