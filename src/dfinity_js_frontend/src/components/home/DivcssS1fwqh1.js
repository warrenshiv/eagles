import React, { useMemo } from "react";
import styles from "./DivcssS1fwqh1.module.css";

const DivcssS1fwqh1 = ({ className = "", propTop, propLeft, propMinWidth }) => {
  const divcssS1fwqh1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const davideLondonStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.divcssS1fwqh, className].join(" ")}
      style={divcssS1fwqh1Style}
    >
      <div className={styles.changingMyThoughts}>Changing my thoughts</div>
      <div className={styles.hasAllowedMe}>has allowed me to</div>
      <div className={styles.changeMyLife}>change my life.</div>
      <div className={styles.davideLondon} style={davideLondonStyle}>
        Davide, London
      </div>
      <div className={styles.onUsingMeditation}>
        on using meditation to turn his life around
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
    </div>
  );
};

export default DivcssS1fwqh1;
