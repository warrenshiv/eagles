import React, { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "", propAlignSelf, group20 }) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper} style={frameDivStyle}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group20}
        />
      </div>
      <div className={styles.letsEmbodyYour}>
        Let’s embody your beautiful ideas together, simplify the way you
        visualize your next big things.
      </div>
    </div>
  );
};

export default FrameComponent;
