import TextInput from "../../_component/TextInput"
import GroupSearch from "./GroupSearch"
import StoreSearch from "./StoreSearch";
import style from "./misigdoForm.module.scss";
const MisigdoForm = () => {
  return (
    <div className={style.misigdo_form_box}>
      <GroupSearch />
      <StoreSearch />
      <TextInput label="메인 메뉴" placeholder="입력해주세요."></TextInput>
      <TextInput label="서브 메뉴" placeholder="입력해주세요."></TextInput>
      <TextInput label="주류" placeholder="입력해주세요."></TextInput>
      <TextInput label="디저트" placeholder="입력해주세요."></TextInput>
    </div>
  )
}

export default MisigdoForm;