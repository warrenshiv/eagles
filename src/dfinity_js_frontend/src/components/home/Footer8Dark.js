import React from "react";
import styles from "./Footer8Dark.module.css";

const Footer8Dark = ({ className = "", group29 }) => {
  return (
    <footer className={[styles.footer8Dark, className].join(" ")}>
      <div className={styles.background} />
      <div className={styles.footer8DarkInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <h1 className={styles.fundit}>FundIt</h1>
            </div>
          </div>
          <div className={styles.footerLocation}>
            <div className={styles.locationParent}>
              <div className={styles.location}>
                <img
                  className={styles.roundPlace24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/roundplace24px@2x.png"
                />
                <div className={styles.faulconerDriveWrapper}>
                  <div className={styles.faulconerDrive}>
                    345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                  </div>
                </div>
              </div>
              <div className={styles.phoneParent}>
                <div className={styles.phone}>
                  <img
                    className={styles.roundPhone24pxIcon}
                    loading="lazy"
                    alt=""
                    src="/roundphone24px.svg"
                  />
                  <div className={styles.faulconerDriveWrapper}>
                    <div className={styles.space}>(123) 456-7890</div>
                  </div>
                </div>
                <div className={styles.phoneIcons}>
                  <img
                    className={styles.roundLocalPrintshop24pxIcon}
                    loading="lazy"
                    alt=""
                    src="/roundlocalprintshop24px@2x.png"
                  />
                  <div className={styles.faulconerDriveWrapper}>
                    <div className={styles.div}>(123) 456-7890</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerSocial}>
              <div className={styles.faulconerDriveWrapper}>
                <div className={styles.socialMedia}>Social Media</div>
              </div>
              <div className={styles.socialIcons}>
                <div className={styles.twitterBlack1}>
                  <div className={styles.rectangle} />
                  <img
                    className={styles.twitterIcon}
                    alt=""
                    src="/twitter.svg"
                  />
                </div>
                <img
                  className={styles.roundLocalPrintshop24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/linkedin-black1@2x.png"
                />
                <img
                  className={styles.roundLocalPrintshop24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/youtube-color1@2x.png"
                />
                <img
                  className={styles.roundLocalPrintshop24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/instagram-black1@2x.png"
                />
                <img className={styles.socialIconsChild} alt="" src={group29} />
                <img
                  className={styles.roundLocalPrintshop24pxIcon}
                  loading="lazy"
                  alt=""
                  src="/googleplus-black1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div className={styles.footerCopyrightChild} />
        <div className={styles.footerLinks}>
          <div className={styles.navigation}>
            <div className={styles.aboutUs}>About us</div>
            <div className={styles.contactUs}>Contact us</div>
            <div className={styles.help}>Help</div>
            <a className={styles.privacyPolicy}>Privacy Policy</a>
            <div className={styles.disclaimer}>Disclaimer</div>
          </div>
          <div className={styles.copyright2018}>
            Copyright © 2024• FundIt Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer8Dark;
