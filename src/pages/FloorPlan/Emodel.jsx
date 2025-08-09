import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [

    { title: "84OA", key: "84OA" },
    { title: "84OB", key: "84OB" },
    { title: "119OA", key: "119OA" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "84OA": "https://www.peakone-prugio.co.kr/vr/tour1.html",
    "84OB": "https://www.peakone-prugio.co.kr/vr/tour2.html",
    "119OA": "https://www.peakone-prugio.co.kr/vr/tour3.html",

  };

  const [selectedType, setSelectedType] = useState("84OA");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>호현 센트럴 아이파크 - E-모델하우스 안내</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
