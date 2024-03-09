"use client";

import { useCallback, useState } from "react";
import AddButton from "./_component/AddButton";
import TextInput from "../_component/TextInput";
import DateInput from "../_component/DateInput";
import MisigdoForm from "./_component/MisigdoForm";
import style from "./add.module.scss";
const AddMisigdoPage = () => {
  const [list, setList] = useState<Number[]>([]);
  const handleOnClick = () => {
    setList([...list, list.length + 1]);
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
      <form className={style.form_area} onSubmit={(e)=>e.preventDefault()}>
        <TextInput label="Title" placeholder="제목을 입력해주세요." />
        <DateInput label="Date" placeholder="0000-00-00" />
        <AddButton onClick={handleOnClick} />

        {list.map((item, idx) => {
          return <MisigdoForm key={idx} />;
        })}
      </form>
    </div>
  );
};

export default AddMisigdoPage;
