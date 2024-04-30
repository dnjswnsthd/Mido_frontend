"use client";

import MisigdoList from "../../_component/MisigdoList";
import { getMisigdoList } from "../_lib/getMisigdoList";
import {useQuery} from "@tanstack/react-query";
const MainMisigdoList = () => {
  const {data: misigdoList, isError, error ,isLoading} = useQuery({
    queryKey: ['getMisigdoList', 1],
    queryFn: getMisigdoList,
  });

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>
  if(!misigdoList) return null;

  return (
    <>
      <MisigdoList list={misigdoList.data} />
    </>
  );
};
export default MainMisigdoList;
