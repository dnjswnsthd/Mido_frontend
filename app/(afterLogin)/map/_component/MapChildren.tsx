"use client";

import { useCallback, useState } from "react";
import SearchInput from "../../_component/SearchInput";
import style from "../map.module.scss";
import Link from "next/link";
import { getMapListByKeyword } from "../_lib/getMapListByKeyword";
import { useMapStore } from "@/app/store/map";
import { useQuery } from "@tanstack/react-query";

const MapChildren = () => {
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const mapStore = useMapStore();
  const [page, setPage] = useState(1);
  
  const {refetch} = useQuery({
    queryKey: ['getMapListByKeyword', page, keyword],
    queryFn: getMapListByKeyword,
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleClick = useCallback(async () => {
    const {data: addressList, isError} = await refetch();
    if(!isError && addressList){
      mapStore.setMarkList(addressList.data);
      setIsSearch(true)
    }else{
      setIsSearch(false)
    }
  }, [mapStore, refetch])
  return (
    <>
      <div className={style.map_content}>
        <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
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
