import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText:
      "미래가치를 높여주는<br />안양 박달2동 재건축 단지",
    contentText:
      "총 507세대 중 144세대 일반공급<br />55·59·84㎡ 다양한 평면으로 실용적 주거 제공",
  },
  {
    img: section2Image2,
    titleText: "생활 편의와 의료 인프라<br />가까이 누리는 프리미엄",
    contentText:
      "단지 인근 주요 병원과 약국<br />우수 학군과 편리한 생활 인프라 갖춘 입지",
  },
  {
    img: section2Image3,
    titleText: "출퇴근과 이동이 편리한<br />교통 중심지",
    contentText:
      "인근 버스·지하철 등 대중교통 접근 용이<br />안양 주요 도로와 연결되어 광역 이동 편리",
  },
  {
    img: section2Image4,
    titleText:
      "교육, 쇼핑, 문화시설이 가까운<br />스마트 생활 인프라",
    contentText:
      "단지 주변 초등학교, 중학교, 학원가<br />편의점, 마트, 공원 등 다양한 생활시설 확보",
  },
  {
    img: section2Image5,
    titleText: "507세대 재건축 단지<br />브랜드 프리미엄",
    contentText: "총 507세대의 중소형 주거 단지로<br />브랜드 프리미엄과 실용적 평면 구성, 커뮤니티 시설 제공",
  },
  {
    img: section2Image6,
    titleText:
      "HDC현대산업개발(주) 시공<br />혁신 설계 적용",
    contentText:
      "단지 내 멀티 발코니, 맞춤형 평면 설계 등<br />입주민 중심의 편리하고 쾌적한 주거 환경 제공",
  },
];

const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
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

  return (
    <div className={styles.container}>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        호현 센트럴 아이파크 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        호현 센트럴 아이파크의 입지 정보를 확인하세요. 뛰어난 교통망, 생활
        인프라, 교육 및 쇼핑 시설 등 편리한 주변 환경을 소개하며, 안양의
        중심에서 누릴 수 있는 생활의 편리함과 가치를 제공합니다
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완벽해질 호현 센트럴 아이파크</div>
        <div>살수록 높아질 호현 센트럴 아이파크</div>

      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="호현 센트럴 아이파크입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 호현 센트럴 아이파크 사업주체 및 시공사와 무관합니다.
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
