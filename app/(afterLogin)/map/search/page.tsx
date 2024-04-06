'use client';
import { useState } from "react";
import MisigdoList from "../../_component/MisigdoList";
import SearchInput from "../../_component/SearchInput";


const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const handleClick = async () => {
    return ;
  }

  return (
    <div>
      <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      <MisigdoList list={[]} />
    </div>
  )
}

export default SearchPage;