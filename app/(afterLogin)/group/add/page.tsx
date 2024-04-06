"use client";
import { useState } from "react";
import style from "./groupAddPage.module.scss";
import TextInput from "../../_component/TextInput";
import SearchInput from "../../_component/SearchInput";
import MdiIcon from "../../_component/MdiIcon";
const GroupAddPage = () => {
  const [list, setList] = useState<Number[]>([]);
  const [keyword, setKeyword] = useState("");
  const handleClick = async () => {
    return;
  };
  return (
    <div className={style.add_group_page}>
      <div className={style.top_area}>
        <TextInput placeholder="그룹명을 입력해주세요." />
        <div className={style.button_area}>
          <button>취소</button>
          <button>등록</button>
        </div>
      </div>
      <div className={style.search_area}>
        <SearchInput value={keyword} handleValue={setKeyword} onClick={handleClick} />
      </div>

      <ul className={style.search_result_list}>
        <h3>검색 결과</h3>
        <li className={style.search_result_item}>
          <p className={style.result_left_area}>
            <MdiIcon path={"mdiAccountCircle"} /> Song (<span>song@naver.com</span>)
          </p>
          <div className={style.result_right_area}>
            <input type="checkbox" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GroupAddPage;
