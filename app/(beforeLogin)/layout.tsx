import { ReactNode } from "react";
import style from "./page.module.scss";
type BeforeLoginLoyoutProps = {children: ReactNode};
const BeforeLoginLoyout = ({children}: BeforeLoginLoyoutProps) => {
  return (
    <div className={style.container}>
      {children}
    </div>
  )
}

export default BeforeLoginLoyout;