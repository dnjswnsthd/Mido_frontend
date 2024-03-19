import MisigdoList from "../../_component/MisigdoList";
import SearchInput from "../../_component/SearchInput";


const SearchPage = () => {
  const dummy = require('/public/data.json');
  const dummyList = Array.from({ length: 3 }, () => dummy);

  return (
    <div>
      <SearchInput />
      <MisigdoList list={dummyList} />
    </div>
  )
}

export default SearchPage;