"use client";

import { useState } from "react";
import TextInput from "../../_component/TextInput";
import GroupSearch from "./GroupSearch";
import StoreSearch from "./StoreSearch";
import DateInput from "../../_component/DateInput";
import AddButton from "./AddButton";
import addStyle from "../add.module.scss";
import style from "./misigdoForm.module.scss";
export interface MisigdoInputForm {
  restaurant_name: string;
  restaurant_address: string;
  main_menu: string;
  sub_menu: string;
  drink_menu: string;
  dessert_menu: string;
}

const MisigdoForm = () => {
  const [list, setList] = useState<MisigdoInputForm[]>([]);
  const handleOnClick = () => {
    const initForm = {
      restaurant_name: "",
      restaurant_address: "",
      main_menu: "",
      sub_menu: "",
      drink_menu: "",
      dessert_menu: "",
    };
    setList([...list, initForm]);
  };
  return (
    <>
      <div className={addStyle.top_area}>
        <h2>미식도생성</h2>
        <div className={addStyle.button_area}>
          <button>취소</button>
          <button>등록</button>
        </div>
      </div>
      <form className={addStyle.form_area} onSubmit={(e) => e.preventDefault()}>
        <TextInput label="Title" placeholder="제목을 입력해주세요." />
        <DateInput label="Date" placeholder="0000-00-00" />
        <AddButton onClick={handleOnClick} />

        {list.map((item, idx) => {
          return (
            <div className={style.misigdo_form_box} key={`${item.restaurant_name}${idx}`}>
              <GroupSearch />
              <StoreSearch />
              <TextInput label="메인 메뉴" placeholder="입력해주세요."></TextInput>
              <TextInput label="서브 메뉴" placeholder="입력해주세요."></TextInput>
              <TextInput label="주류" placeholder="입력해주세요."></TextInput>
              <TextInput label="디저트" placeholder="입력해주세요."></TextInput>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default MisigdoForm;
