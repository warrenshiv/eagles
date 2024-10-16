import React, { useMemo } from "react";
import styles from "./DivcssS1fwqh.module.css";

const DivcssS1fwqh = ({ className = "", propLeft }) => {
  const divcssS1fwqhStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.divcssS1fwqh, className].join(" ")}
      style={divcssS1fwqhStyle}
    >
      <div className={styles.headspaceGivesMe}>Headspace gives me a</div>
      <div className={styles.sliceOfThe}>slice of the day that’s just</div>
      <div className={styles.forMe}>for me.</div>
      <div className={styles.nadienNewMexico}>Nadien, New Mexico</div>
      <div className={styles.onPrioritizingSelfCare}>
        on prioritizing self-care
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
    </div>
  );
};

export default DivcssS1fwqh;
