import style from "./addButton.module.scss"
const AddButton = ({onClick}: {onClick: ()=>void}) => {
  return (
    <div className={style.add_button_area} onClick={onClick}>
      <button className={style.add_button}>+</button>
    </div>
  )
}

export default AddButton