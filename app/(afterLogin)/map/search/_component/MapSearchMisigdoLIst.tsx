"use client";
import { useEffect, useCallback, useState } from "react";
import MisigdoList from "@/app/(afterLogin)/_component/MisigdoList";
import SearchInput from "@/app/(afterLogin)/_component/SearchInput";
// import { useMapStore } from "@/app/store/map";
import { getMisigdoListByKeyword } from "../../_lib/getMisigdoListByKeyword";
import { useQuery } from "@tanstack/react-query";

const MapSearchMisigdoList = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const {data: misigdoList, isError, error ,isLoading, refetch} = useQuery({
    queryKey: ['getMisigdoListByKeyword', 1, keyword],
    queryFn: getMisigdoListByKeyword,
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  if(!misigdoList) return null;

  return (
    <div>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={()=>refetch()} />
      <MisigdoList list={misigdoList.data} />
    </div>
  );
};

export default MapSearchMisigdoList;
