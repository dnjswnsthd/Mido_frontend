"use client";

import { useEffect, useState } from "react";
import MisigdoList from "../../_component/MisigdoList";
import { getMisigdoList } from "../_lib/getMisigdoList";

const MainMisigdoList = () => {
  const [page, setPage] = useState(1);
  const [misigdoList, setMisigdoList] = useState([]);
  const getList = async () => {
    try {
      const {data} = await getMisigdoList(page);
      if (data) {
        setMisigdoList(data);
      } else {
        console.log("err");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <MisigdoList list={misigdoList} />
    </>
  );
};
export default MainMisigdoList;
