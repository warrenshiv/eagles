import React, { useCallback } from "react";
import FrameComponent1 from "../../components/home/FrameComponent1";
import DivcssS1fwqh from "../../components/home/DivcssS1fwqh";
import Divsibling from "../../components/home/Divsibling";
import Divactive from "../../components/home/Divactive";
import DivcssS1fwqh1 from "../../components/home/DivcssS1fwqh1";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../../components/home/FrameComponent2";
import Footer8Dark from "../../components/home/Footer8Dark";
import styles from "./NewHome.module.css";
import * as Images from "../../assets/images";
import { Img } from "../../components/Img";

const NewHome = () => {
  const navigate = useNavigate();

  const onSvgIconClick = useCallback(() => {
    navigate("/frame-02");
  }, [navigate]);

  const onSvgIconClick1 = useCallback(() => {
    navigate("/frame-03");
  }, [navigate]);

  return (
    <div className={styles.newhome}>
      <div className={styles.newhomeChild} />
      <img className={styles.newhomeItem} alt="" src="/group-3848.svg" />
      <img className={styles.newhomeInner} alt="" src="/group-38491@2x.png" />
      <FrameComponent1 maskGroup="/mask-group@2x.png" />
      <div className={styles.transparencyParent}>
        <b className={styles.transparency}>Transparency</b>
        <div className={styles.trackEveryStep}>
          Track Every Step: Monitor your donation from submission to usage with
          complete visibility
        </div>
        <img
          className={styles.layersSvgrepocomIcon}
          alt=""
          src="/layers-svgrepocom.svg"
        />
      </div>
      <div className={styles.divcssS1fwqhParent}>
        <DivcssS1fwqh />
        <div className={styles.divcssS1fwqh}>
          <div className={styles.theStressAnd}>
            The stress and loneliness courses … taught me how to comfort myself.
          </div>
          <div className={styles.aliciaCanada}>Alicia, Canada</div>
          <div className={styles.onManagingThe}>
            on managing the trauma of sexual assault
          </div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <Divsibling />
        <Divactive frame="/frame-3.svg" />
        <div className={styles.divsibling}>
          <div className={styles.headspaceProvidesMe}>
            Headspace provides me
          </div>
          <div className={styles.withA}>with … a connection to</div>
          <div className={styles.myselfAndA}>myself, and a</div>
          <div className={styles.disconnectionFrom}>disconnection from</div>
          <div className={styles.negativeThoughts}>negative thoughts,</div>
          <div className={styles.feelingsAndSensations}>
            feelings, and sensations.
          </div>
          <div className={styles.keriUk}>Keri, UK</div>
          <div className={styles.onFindingHer}>on finding her happy place</div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <DivcssS1fwqh1 />
        <div className={styles.divcssS1fwqh1}>
          <div className={styles.aHappyWorkforce}>
            A happy workforce leads to a happy work environment.
          </div>
          <div className={styles.jaimeSpain}>Jaime, Spain</div>
          <div className={styles.onTheBenefitsContainer}>
            <p className={styles.onTheBenefits}>
              on the benefits of his employees embracing meditation
            </p>
          </div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <b className={styles.testimonials}>Testimonials</b>
        <img className={styles.svgIcon} alt="" src="/svg1.svg" />
        <img
          className={styles.svgIcon1}
          alt=""
          src="/svg-11.svg"
          onClick={onSvgIconClick}
        />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.divcssS1fwqhGroup}>
          <img
            className={styles.divcssS1fwqhIcon}
            alt=""
            src="/divcsss1fwqh@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon1}
            alt=""
            src="/divcsss1fwqh-1@2x.png"
          />
          <img
            className={styles.divsiblingIcon}
            alt=""
            src="/divsibling@2x.png"
          />
          <img
            className={styles.divactiveIcon}
            alt=""
            src="/divactive@2x.png"
          />
          <img
            className={styles.divsiblingIcon1}
            alt=""
            src="/divsibling-1@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon2}
            alt=""
            src="/divcsss1fwqh-2@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon3}
            alt=""
            src="/divcsss1fwqh-3@2x.png"
          />
        </div>
        <b className={styles.testimonials1}>Testimonials</b>
        <img className={styles.svgIcon} alt="" src="/svg1.svg" />
        <img className={styles.svgIcon3} alt="" src="/svg-11.svg" />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.divcssS1fwqhContainer}>
          <img
            className={styles.divcssS1fwqhIcon}
            alt=""
            src="/divcsss1fwqh-4@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon1}
            alt=""
            src="/divcsss1fwqh-5@2x.png"
          />
          <img
            className={styles.divsiblingIcon2}
            alt=""
            src="/divsibling-2@2x.png"
          />
          <img
            className={styles.divactiveIcon1}
            alt=""
            src="/divactive-1@2x.png"
          />
          <img
            className={styles.divsiblingIcon3}
            alt=""
            src="/divsibling-3@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon6}
            alt=""
            src="/divcsss1fwqh-6@2x.png"
          />
          <img
            className={styles.divcssS1fwqhIcon7}
            alt=""
            src="/divcsss1fwqh-7@2x.png"
          />
        </div>
        <b className={styles.testimonials1}>Testimonials</b>
        <img className={styles.svgIcon} alt="" src="/svg1.svg" />
        <img className={styles.svgIcon3} alt="" src="/svg-11.svg" />
      </div>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          <FrameComponent2 />
          <div className={styles.frameDiv}>
            <DivcssS1fwqh propLeft="-602.7px" />
            <div className={styles.divcssS1fwqh2}>
              <div className={styles.theStressAnd}>
                The stress and loneliness courses … taught me how to comfort
                myself.
              </div>
              <div className={styles.aliciaCanada}>Alicia, Canada</div>
              <div className={styles.onManagingThe}>
                on managing the trauma of sexual assault
              </div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <Divsibling
              propTop="246.1px"
              propLeft="-244.5px"
              propMinWidth="unset"
              propMinWidth1="unset"
            />
            <Divactive
              propTop="260.5px"
              propLeft="113.7px"
              propOpacity="0.4"
              frame="/frame-10.svg"
            />
            <div className={styles.divsibling1}>
              <div className={styles.headspaceProvidesMe}>
                Headspace provides me
              </div>
              <div className={styles.withA}>with … a connection to</div>
              <div className={styles.myselfAndA}>myself, and a</div>
              <div className={styles.disconnectionFrom}>disconnection from</div>
              <div className={styles.negativeThoughts}>negative thoughts,</div>
              <div className={styles.feelingsAndSensations}>
                feelings, and sensations.
              </div>
              <div className={styles.keriUk}>Keri, UK</div>
              <div className={styles.onFindingHer}>
                on finding her happy place
              </div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <DivcssS1fwqh1
              propTop="260.5px"
              propLeft="830.1px"
              propMinWidth="86.5px"
            />
            <div className={styles.divcssS1fwqh3}>
              <div className={styles.aHappyWorkforce}>
                A happy workforce leads to a happy work environment.
              </div>
              <div className={styles.jaimeSpain}>Jaime, Spain</div>
              <div className={styles.onTheBenefitsContainer}>
                <p className={styles.onTheBenefits}>
                  on the benefits of his employees embracing meditation
                </p>
              </div>
              <img className={styles.frameIcon} alt="" src="/frame.svg" />
            </div>
            <h1 className={styles.testimonials3}>Testimonials</h1>
            <img
              className={styles.svgIcon6}
              alt=""
              src="/svg1.svg"
              onClick={onSvgIconClick1}
            />
            <img className={styles.svgIcon3} alt="" src="/svg-11.svg" />
          </div>
        </div>
      </section>
      <Footer8Dark group29="/group-29@2x.png" />
    </div>
  );
};

export default NewHome;
