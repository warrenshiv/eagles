import React, { useMemo } from "react";
import styles from "./Divactive.module.css";

const Divactive = ({ className = "", propTop, propLeft, propOpacity, frame }) => {
  const divactiveStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      opacity: propOpacity,
    };
  }, [propTop, propLeft, propOpacity]);

  return (
    <div
      className={[styles.divactive, className].join(" ")}
      style={divactiveStyle}
    >
      <img className={styles.frameIcon} alt="" src={frame} />
      <div className={styles.iCameTo}>I came to learn that the</div>
      <div className={styles.storylineInMy}>storyline in my head …</div>
      <div className={styles.wasHoldingMe}>was holding me back.</div>
      <div className={styles.peterBelgium}>Peter, Belgium</div>
      <div className={styles.onWhatHe}>
        on what he learned when sitting with himself
      </div>
    </div>
  );
};

export default Divactive;
