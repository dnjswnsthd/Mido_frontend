import style from "./dateInput.module.scss";
const DateInput = ({label, placeholder}: {label: string, placeholder: string}) => {
  return (
    <label className={style.input_wrap}>
      {label && <span className={style.input_label}>{label}</span>}
      <input className={style.input} type="date"/>
    </label>
  )
}

export default DateInput;