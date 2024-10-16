import React from "react";
import TransparencyItems from "./TransparencyItems";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <button className={styles.featuresWrapper}>
              <div className={styles.features}>Features</div>
            </button>
            <h1 className={styles.ourFeatures}>Our Features</h1>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.transparencyItemsParent}>
                <TransparencyItems
                  transparency="Transparency"
                  trackEveryStepMonitorYour="Track Every Step: Monitor your donation from submission to usage with complete visibility"
                  layersSvgrepocom="/layers-svgrepocom.svg"
                />
                <TransparencyItems
                  transparency="Real-Time Tracking"
                  propLeft="calc(50% - 111.5px)"
                  trackEveryStepMonitorYour="Instant Updates: Get real-time notifications and updates on how your donation is making an impact."
                  propLeft1="19px"
                  propWidth="224px"
                  layersSvgrepocom="/analytics-svgrepocom.svg"
                />
              </div>
              <div className={styles.howItWorksWrapper}>
                <h1 className={styles.howItWorks}>How it Works</h1>
              </div>
            </div>
            <div className={styles.secureTransactionsParent}>
              <h3 className={styles.secureTransactions}>Secure Transactions</h3>
              <div className={styles.blockchainProtectionEnsure}>
                Blockchain Protection: Ensure your contributions are safe with
                robust, decentralized security measures provided by ICP
                technology, which offers a highly secure and tamper-proof
                environment.
              </div>
              <img
                className={styles.windowWithSecurityBadgeSvgIcon}
                loading="lazy"
                alt=""
                src="/windowwithsecuritybadge-svgrepocom.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent2}>
            <FrameComponent group20="/group-20@2x.png" />
            <FrameComponent
              propAlignSelf="unset"
              group20="/group-20-1@2x.png"
            />
            <FrameComponent
              propAlignSelf="unset"
              group20="/group-20-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
