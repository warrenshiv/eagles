import React, { useMemo } from "react";
import styles from "./Divsibling.module.css";

const Divsibling = ({
  className = "",
  propTop,
  propLeft,
  propMinWidth,
  propMinWidth1,
}) => {
  const divsiblingStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const ourHomeStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const rachaelUKStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={[styles.divsibling, className].join(" ")}
      style={divsiblingStyle}
    >
      <div className={styles.yourAppBrings}>Your app brings so much</div>
      <div className={styles.peaceAndTolerance}>peace and tolerance to</div>
      <div className={styles.ourHome} style={ourHomeStyle}>
        our home.
      </div>
      <div className={styles.rachaelUk} style={rachaelUKStyle}>
        Rachael, UK
      </div>
      <div className={styles.onMeditationsPositive}>
        on meditation’s positive effect on family life
      </div>
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
    </div>
  );
};

export default Divsibling;
