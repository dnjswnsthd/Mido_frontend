import { ReactNode } from "react";
import style from "./page.module.scss";
import NavigationBar from "./_component/NavigationBar";
import RQProvider from "./_component/RQProvider";
type AfterLoginLoyoutProps = { children: ReactNode; modal: ReactNode };
const AfterLoginLoyout = ({ children, modal }: AfterLoginLoyoutProps) => {
  return (
    <div className={style.layout_container}>
      {/* <RQProvider> */}
        <div className={style.content_container}>
          {children}
          {modal}
          <NavigationBar />
        </div>
      {/* </RQProvider> */}
    </div>
  );
};

export default AfterLoginLoyout;
