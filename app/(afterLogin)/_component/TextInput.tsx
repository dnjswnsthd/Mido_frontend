import style from "./textInput.module.scss";
const TextInput = ({label, placeholder}: {label?:string, placeholder: string}) => {
  return (
    <label className={style.input_wrap}>
      {label && <span className={style.input_label}>{label}</span>}
      <input className={style.input} placeholder={placeholder}/>
    </label>
  )
}

export default TextInput;