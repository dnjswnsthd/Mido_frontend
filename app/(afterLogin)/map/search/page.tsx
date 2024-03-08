import MisigdoItem from "../../_component/MisigdoItem";
import SearchInput from "../../_component/SearchInput";

const SearchPage = () => {
  return (
    <div>
      <SearchInput />
      <ul>
        <MisigdoItem />
        <MisigdoItem />
        <MisigdoItem />
      </ul>
    </div>
  )
}

export default SearchPage;