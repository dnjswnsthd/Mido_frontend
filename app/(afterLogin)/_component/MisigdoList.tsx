import { DummyList, ResultDummy } from "../home/page";
import MisigdoItem from "./MisigdoItem";
import style from "./misigdoItem.module.scss";

interface MisigdoListProps {list: DummyList};
const MisigdoList = ({list}: MisigdoListProps) => {
  return (
    <ul className={style.misigdo_list}>
      {
        list.map((misigdo)=>{
          return <MisigdoItem info={misigdo} key={`${misigdo.group_id}${misigdo.group_name}`}/>
        })
      }
    </ul>
  )
}

export default MisigdoList;