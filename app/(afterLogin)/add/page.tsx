"use client";

import { useCallback, useState } from "react";
import AddButton from "./_component/AddButton";
import TextInput from "../_component/TextInput";
import DateInput from "../_component/DateInput";
import MisigdoForm from "./_component/MisigdoForm";
import style from "./add.module.scss";

export interface MisigdoInputForm {
  restaurant_name: string;
  restaurant_address: string;
  main_menu: string;
  sub_menu: string;
  drink_menu: string;
  dessert_menu: string;
}

const AddMisigdoPage = () => {
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
    <div className={style.add_misigdo_page}>
      <div className={style.top_area}>
        <h2>미식도생성</h2>
        <div className={style.button_area}>
          <button>취소</button>
          <button>등록</button>
        </div>
      </div>
      <form className={style.form_area} onSubmit={(e) => e.preventDefault()}>
        <TextInput label="Title" placeholder="제목을 입력해주세요." />
        <DateInput label="Date" placeholder="0000-00-00" />
        <AddButton onClick={handleOnClick} />

        {list.map((item, idx) => {
          return <MisigdoForm key={idx} origin={item} />;
        })}
      </form>
    </div>
  );
};

export default AddMisigdoPage;
