import style from "./meterBar.module.scss";

interface MeterBarProps {
  value: number;
  kind: 'target' | 'average';
}
const MeterBar = ({value, kind}: MeterBarProps) => {
  return (
    <div className={style.meter_bar}>
      <meter min={0} max={5} low={2} high={4} value={value} className={`${kind==='average' ? style.average : style.target}`}/>
    </div>
  )
}

export default MeterBar;