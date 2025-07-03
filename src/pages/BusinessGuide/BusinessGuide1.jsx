import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

// 2단지 이미지 및 표 이미지
import page2 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage2 from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
// 3단지 이미지 및 표 이미지
import page3 from "../../assets/BusinessGuide/BusinessGuide1/page2.jpg";
import tableImage3 from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";

// 2단지 사업개요 데이터
const projectData2 = [
  { label: "사업명", value: "용인 용인푸르지오 원클러스터2단지" },
  { label: "사업위치", value: "용인시 처인구 남동 산126-1일원" },
  { label: "대지면적", value: "106,050.4985㎡" },
  { label: "건축면적", value: "12,000.0000㎡" },
  { label: "연면적", value: "350,000.0000㎡" },
  { label: "용적률", value: "220.00%" },
  { label: "건축규모", value: "아파트 지하 3층 ~ 지상 28층 14개동(59㎡A·B / 84㎡A·B·C)" },
  { label: "세대수", value: "2단지 1,804세대" },
];

// 3단지 사업개요 데이터
const projectData3 = [
  { label: "사업명", value: "용인 푸르지오 원클러스터 3단지" },
  { label: "사업위치", value: "용인시 처인구 남동 243일원" },
  { label: "대지면적", value: "106,050.4985㎡" },
  { label: "건축면적", value: "11,500.0000㎡" },
  { label: "연면적", value: "340,000.0000㎡" },
  { label: "용적률", value: "215.00%" },
  { label: "건축규모", value: "아파트 지하 4층 ~ 지상 26층 (84㎡A·B·C)" },
  { label: "세대수", value: "총 239세대" },
];

const BusinessGuide = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "계약서류안내", url: "/BusinessGuide/documents" },
  ];

  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

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

  // 선택된 단지 상태: 2단지 또는 3단지 (기본은 2단지)
  const [selectedPhase, setSelectedPhase] = useState(2);

  // 선택된 단지에 따른 이미지 및 데이터 설정
  const currentContent =
    selectedPhase === 2
      ? {
          pageImage: page2,
          tableImage: tableImage2,
          projectData: projectData2,
        }
      : {
          pageImage: page3,
          tableImage: tableImage3,
          projectData: projectData3,
        };

  // SEO 및 메타 태그에 사용할 데이터
  const metaData = {
    2: {
      title: "용인푸르지오 원클러스터2단지 - 사업안내",
      description:
        "용인푸르지오 원클러스터2단지의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명합니다.",
      url: "https://www.beyinegzersizi.com/BusinessGuide/intro",
      image: "https://www.beyinegzersizi.com/Main1.png",
    },
    3: {
      title: "용인푸르지오 원클러스터 3단지 - 사업안내",
      description:
        "푸르지오 원클러스터 3단지의 사업개요를 통해 프로젝트의 비전과 가치를 확인하세요. 단지 설계, 개발 목표, 주변 환경과의 조화 등을 중점적으로 설명합니다.",
      url: "https://www.beyinegzersizi.com/BusinessGuide/intro",
      image: "https://www.beyinegzersizi.com/Main1.png",
    },
  };

  return (
	
    <div className={styles.container}>
		
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <title>{metaData[selectedPhase].title}</title>
        <meta name="description" content={metaData[selectedPhase].description} />
        <meta name="keywords" content="용인푸르지오원클러스터, 용인푸르지오원클러스터2단지, 용인푸르지오원클러스터2단지모델하우스" />
        <link rel="canonical" href={metaData[selectedPhase].url} />
        <meta property="og:title" content={metaData[selectedPhase].title} />
        <meta
          property="og:description"
          content={metaData[selectedPhase].description}
        />
        <meta property="og:image" content={metaData[selectedPhase].image} />
        <meta property="og:url" content={metaData[selectedPhase].url} />
        <meta property="og:site_name" content={metaData[selectedPhase].title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData[selectedPhase].title} />
        <meta
          name="twitter:description"
          content={metaData[selectedPhase].description}
        />
        <meta name="twitter:image" content={metaData[selectedPhase].image} />
        <meta name="twitter:url" content={metaData[selectedPhase].url} />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${metaData[selectedPhase].title}",
            "description": "${metaData[selectedPhase].description}",
            "url": "${metaData[selectedPhase].url}"
          }
          `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="사업개요" />
      <MenuBar contents={menuContents} />
      <h1 className={styles.screenReaderOnly}>
        {metaData[selectedPhase].title}
      </h1>
      <p className={styles.screenReaderOnly}>
        {metaData[selectedPhase].description}
      </p>

      {/* 선택된 단지에 따른 상단 이미지 */}
      <img
        className={styles.img3}
        src={currentContent.pageImage}
        alt={`푸르지오 원클러스터 ${selectedPhase}단지 조감도`}
      />
	  
	  {/* 단지 선택 버튼 */}
      <div className={styles.phaseButtons}>
	  <button
  className={selectedPhase === 2 ? styles.active : styles.inactive}
  onClick={() => setSelectedPhase(2)}
>
  2단지
</button>
<button
  className={selectedPhase === 3 ? styles.active : styles.inactive}
  onClick={() => setSelectedPhase(3)}
>
  3단지
</button>
      </div>

      {/* 사업개요 표 영역 */}
      <div className={styles.tableContainer}>
        {!isMobile && (
          <img
            className={styles.tableImg}
            src={currentContent.tableImage}
            alt={`사업개요표 ${selectedPhase}단지`}
          />
        )}

		
        <table className={styles.projectTable}>
          <tbody>
            {currentContent.projectData.map((item, index) => (
              <tr key={index}>
                <td className={styles.label}>{item.label}</td>
                <td className={styles.contents}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 이미지에 표현된 외관 디자인은 개략적인 이해를 돕기 위한 것으로, 상품특화 및 인허가 협의에 따라 입면 디자인, 경관조명, 출입구, 색채, 몰딩, 창호, 난간, 옥상 장식물, 줄눈, 각종 시설물의 디자인 및 형태, 마감사양, 조명 설치 위치 등이 실시공시 변경될 수 있습니다.
        </div>
        
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide;
