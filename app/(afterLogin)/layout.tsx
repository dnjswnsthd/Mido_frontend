import { ReactNode } from "react";
import style from "./page.module.scss";
import NavigationBar from "./_component/NavigationBar";
type AfterLoginLoyoutProps = { children: ReactNode, modal: ReactNode };
const AfterLoginLoyout = ({ children, modal }: AfterLoginLoyoutProps) => {
  return (
    <div className={style.layout_container}>
      <div className={style.content_container}>
        {children}
        {modal}
        <NavigationBar />
      </div>
    </div>
  );
};

export default AfterLoginLoyout;
