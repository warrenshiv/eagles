import React, { useMemo } from "react";
import styles from "./TransparencyItems.module.css";

const TransparencyItems = ({
  className = "",
  transparency,
  propLeft,
  trackEveryStepMonitorYour,
  propLeft1,
  propWidth,
  layersSvgrepocom,
}) => {
  const transparencyStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const trackEveryStepStyle = useMemo(() => {
    return {
      left: propLeft1,
      width: propWidth,
    };
  }, [propLeft1, propWidth]);

  return (
    <div className={[styles.transparencyItems, className].join(" ")}>
      <h3 className={styles.transparency} style={transparencyStyle}>
        {transparency}
      </h3>
      <div className={styles.trackEveryStep} style={trackEveryStepStyle}>
        {trackEveryStepMonitorYour}
      </div>
      <img
        className={styles.layersSvgrepocomIcon}
        alt=""
        src={layersSvgrepocom}
      />
    </div>
  );
};

export default TransparencyItems;
