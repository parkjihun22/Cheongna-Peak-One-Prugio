import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/BusinessGuide/BusinessGuide2/page1.jpg"; // ❌ 기존 이미지 주석 처리

const BusinessGuide2 = () => {
    const menuContents = [
      { title: "사업안내", url: "/BusinessGuide/intro" },
      { title: "분양일정", url: "/BusinessGuide/plan" },
      // { title: "계약서류안내", url: "/BusinessGuide/documents" },
    ];

    const [isScroll, setIsScroll] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false); // ✅ 기존 이미지 가시성 상태 유지
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }

            // ✅ 기존 이미지 로딩 로직도 유지 (하지만 Ready가 표시됨)
            if (window.scrollY > 200) {
                setIsImageVisible(true);
            } else {
                setIsImageVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>청라 피크원 푸르지오 - 분양일정</title>
        <meta
          name="description"
          content="청라피크원푸르지오의 최신 분양일정을 확인하고, 분양 일정 및 세부 사항을 이 페이지에서 자세히 확인하세요. 놓치지 마세요!
"
        />
        <meta name="keywords" content="청라피크원푸르지오, 청라 피크원 푸르지오, 청라 피크원 푸르지오모델하우스" />
        <link
          rel="canonical"
          href="https://www.bunyang-114.com/BusinessGuide/plan"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="청라 피크원 푸르지오 - 분양일정"
        />
        <meta
          property="og:description"
          content="청라피크원푸르지오의 최신 분양일정을 확인하고, 분양 일정 및 세부 사항을 이 페이지에서 자세히 확인하세요. 놓치지 마세요!
"
        />
        <meta
          property="og:image"
          content="https://www.bunyang-114.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.bunyang-114.com/BusinessGuide/plan"
        />
        <meta property="og:site_name" content="청라 피크원 푸르지오" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="청라 피크원 푸르지오 - 분양일정"
        />
        <meta
          name="twitter:description"
          content="청라피크원푸르지오의 최신 분양일정을 확인하고, 분양 일정 및 세부 사항을 이 페이지에서 자세히 확인하세요. 놓치지 마세요!
"
        />
        <meta
          name="twitter:image"
          content="https://www.bunyang-114.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.bunyang-114.com/BusinessGuide/plan"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                                        {
                                            "@context": "https://schema.org",
                                            "@type": "WebPage",
                                            "name": "청라 피크원 푸르지오 - 분양일정",
                                            "description": "청라피크원푸르지오의 최신 분양일정을 확인하고, 분양 일정 및 세부 사항을 이 페이지에서 자세히 확인하세요. 놓치지 마세요!
",
                                            "url": "https://www.bunyang-114.com/BusinessGuide/plan"
                                        }
                                        `}
        </script>
      </Helmet>

            <Header isChanged={isScroll} />
            <FixIcon />

            <Bener title="사업개요" />
            <MenuBar contents={menuContents} />

            <h1 className={styles.screenReaderOnly}>청라피크원푸르지오 - 분양일정</h1>
            <p className={styles.screenReaderOnly}>
			청라피크원푸르지오의 분양 일정은 중요한 날짜들을 안내하는 핵심 정보입니다.
            </p>

            <div className={styles.textBox}>
                <div>반도체클러스터의 눈부신 가치 위에</div>
                <div>청라 피크원 푸르지오의 새로운 자부심으로 찾아옵니다.</div>
            </div>

            {/* ✅ 기존 이미지 부분 주석 처리하고 Ready 컴포넌트 표시 */}
            <img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="청라 피크원 푸르지오 분양일정안내-image1" />
            <div className={styles.readyContainer}>
           
            </div>

            <Footer />
        </div>
    );
};

export default BusinessGuide2;
