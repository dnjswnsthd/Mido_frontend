const DateInput = ({label, placeholder}: {label: string, placeholder: string}) => {
  return (
    <label>
      <span>{label}</span>
      <input placeholder={placeholder} type="date"/>
    </label>
  )
}

export default DateInput;