"use client";

import style from "./logo.module.scss";
import { useEffect, useState } from "react";
import StartSection from "./StartSection";
import EndSection from "./EndSection";

const Logo = () => {
  const [isStart, setIsStart] = useState(true);

  useEffect(() => {
    const toggleIsStart = isStart
      ? setInterval(() => {
          setIsStart((state) => !state);
        }, 13000)
      : setInterval(() => {
          setIsStart((state) => !state);
        }, 5000);
    return () => clearInterval(toggleIsStart);
  }, [isStart]);


  return (
    <div className={style.logo_container}>
      {isStart ? (
        <StartSection />
      ) : (
        <EndSection />
      )}
    </div>
  );
};

export default Logo;
