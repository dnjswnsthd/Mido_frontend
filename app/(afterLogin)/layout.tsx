import { ReactNode } from "react";

type AfterLoginLoyoutProps = {children: ReactNode};
const AfterLoginLoyout = ({children}: AfterLoginLoyoutProps) => {
  return (
    <div>
      after Layout
      {children}
    </div>
  )
}

export default AfterLoginLoyout;