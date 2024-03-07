import { ReactNode } from "react";

type BeforeLoginLoyoutProps = {children: ReactNode};
const BeforeLoginLoyout = ({children}: BeforeLoginLoyoutProps) => {
  return (
    <div>
      before Layout
      {children}
    </div>
  )
}

export default BeforeLoginLoyout;