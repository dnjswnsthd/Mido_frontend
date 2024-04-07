'use client';
import { useCallback, useEffect, useState } from "react";
import MisigdoList from "../../_component/MisigdoList";
import SearchInput from "../../_component/SearchInput";


const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [misigdoList, setMisigdoList] = useState([]);
  const getMapList =useCallback( async () => {
    try {
      const { userId } = JSON.parse(localStorage.getItem("userInfo") as string);
      const queryParams = new URLSearchParams();
      queryParams.append("userId", userId);
      queryParams.append("search", keyword);
      queryParams.append("page", page.toString());
      
      const response = await fetch(`http://localhost:3001/api/map/list?${queryParams}`, {
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
  },[page]);

  useEffect(()=>{
    getMapList();
  },[getMapList])

  const handleClick = async () => {
    await getMapList();
  }

  return (
    <div>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      <MisigdoList list={misigdoList} />
    </div>
  )
}

export default SearchPage;