"use client";
import { useEffect, useCallback, useState } from "react";
import MisigdoList from "@/app/(afterLogin)/_component/MisigdoList";
import SearchInput from "@/app/(afterLogin)/_component/SearchInput";
import { useMapStore } from "@/app/store/map";
import { getMisigdoListByKeyword } from "../../_lib/getMisigdoListByKeyword";

const MapSearchMisigdoList = () => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [misigdoList, setMisigdoList] = useState([]);
  const mapStore = useMapStore();
  const getMapList = useCallback(async () => {
    try {
      const {data} = await getMisigdoListByKeyword(page, keyword);
      if (data) {
        setMisigdoList(data);
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  }, [keyword, page]);

  useEffect(() => {
    getMapList();
  }, [getMapList]);

  const handleClick = async () => {
    await getMapList();
  };
  return (
    <div>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      <MisigdoList list={misigdoList} />
    </div>
  );
};

export default MapSearchMisigdoList;
