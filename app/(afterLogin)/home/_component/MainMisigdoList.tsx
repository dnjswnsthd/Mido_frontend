"use client";

import { useEffect, useState } from "react";
import MisigdoList from "../../_component/MisigdoList";

const MainMisigdoList = () => {
  const [page, setPage] = useState(1);
  const [misigdoList, setMisigdoList] = useState([]);
  const getList = async () => {
    try {
      const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", userId);
      queryParams.append("page", page.toString());

      const response = await fetch(`http://localhost:3001/api/misigdo/list?${queryParams}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", mode: "no-cors" },
      });

      if (response.ok) {
        const { data } = await response.json();
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
