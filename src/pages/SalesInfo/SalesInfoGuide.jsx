import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./SalesInfo.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/SalesInfo/guide/page1.jpg"


const ComplexGuide1 = () => {
  const menuContents = [
    { title: "청약안내", url: "/SalesInfo/SubscriptionGuide" },
    { title: "청약체크포인트", url: "/SalesInfo/guide" },
    { title: "모집공고안내", url: "/SalesInfo/announcement" },
    // { title: "인지세납부안내", url: "/SalesInfo/stampTax" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로드 상태
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 이미지 로드 후 애니메이션 실행
  const handleImageLoad = () => {
    setIsImage2Loaded(true);
  };

  return (
    <div className={styles.container}>


      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="청약안내" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        청라 피크원 푸르지오 - 인터넷청약
      </h1>
      <p className={styles.screenReaderOnly}>
        청라 피크원 푸르지오의 인터넷 청약은 간편하고 빠르게 분양에 참여할
        수 있는 방법을 제공합니다. 온라인을 통해 청약 절차를 빠르게 진행하며,
        언제 어디서든 쉽게 신청 가능합니다. 청약 전 반드시 필요한 정보와 절차를
        확인하고, 청약을 통해 청라 피크원 푸르지오의 기회를 놓치지 마세요.
      </p>

      <div className={styles.textBox}>
        <div>인터넷 청약하는 방법을 확인하세요</div>
        <div>소수만 누리는 프리미엄 청라 피크원 푸르지오</div>
      </div>

      {/* 이미지에 애니메이션 효과 추가 */}
      <img
        className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
        src={page1}
        alt="청라 피크원 푸르지오 청약안내-image1"
        onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
      />


      <div className={styles.commonBox2}>
        <div className={styles.notice}>
          ※ 상기 이미지는 고객의 이해를 돕기 위한 것으로 성공적인 청약을 위해
          도움을 드리고있습니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide1;
