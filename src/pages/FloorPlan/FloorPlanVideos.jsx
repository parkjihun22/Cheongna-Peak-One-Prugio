import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const FloorPlanVideos = () => {
  const [activeTab, setActiveTab] = useState(1); // 기본적으로 첫 번째 탭 활성화
  const [isScroll, setIsScroll] = useState(false);

  // YouTube 동영상 파일 경로들
  const videoFiles = [
    {
      id: 1,
      title: "입지환경 안내영상",
      src: "https://www.youtube.com/embed/Hc1Vhvt-jc0?autoplay=1",
    },
    {
      id: 2,
      title: "59타입 안내영상",
      src: "https://www.youtube.com/embed/M7zpyR_FgTQ?autoplay=1",
    },
    {
      id: 3,
      title: "84타입 안내영상",
      src: "https://www.youtube.com/embed/3OVPzdPQ7hM?autoplay=1",
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const menuContents = [
    { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        <title>용인푸르지오 원클러스터2단지 - 평면안내</title>
        <meta
          name="description"
          content="세대안내영상 안내 페이지는 용인푸르지오원클러스터의 각 아파트 세대안내영상을 제공합니다.
"
        />
        <meta name="keywords" content="용인푸르지오원클러스터, 용인푸르지오원클러스터2단지, 용인푸르지오원클러스터2단지모델하우스" />
        <link
          rel="canonical"
          href="https://www.beyinegzersizi.com/FloorPlan/videos"
        />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta
          property="og:title"
          content="용인푸르지오 원클러스터2단지 - 평면안내"
        />
        <meta
          property="og:description"
          content="세대안내영상 안내 페이지는 용인푸르지오원클러스터의 각 아파트 세대안내영상을 제공합니다.
"
        />
        <meta
          property="og:image"
          content="https://www.beyinegzersizi.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.beyinegzersizi.com/FloorPlan/videos"
        />
        <meta property="og:site_name" content="용인푸르지오 원클러스터2단지" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="용인푸르지오 원클러스터2단지 - 평면안내"
        />
        <meta
          name="twitter:description"
          content="세대안내영상 안내 페이지는 용인푸르지오원클러스터의 각 아파트 세대안내영상을 제공합니다.
"
        />
        <meta
          name="twitter:image"
          content="https://www.beyinegzersizi.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.beyinegzersizi.com/FloorPlan/videos"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
                    {
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "용인푸르지오 원클러스터2단지 - 평면안내",
                      "description": "세대안내영상 안내 페이지는 용인푸르지오원클러스터의 각 아파트 세대안내영상을 제공합니다.
",
                      "url": "https://www.beyinegzersizi.com/FloorPlan/videos"
                    }
                    `}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="세대안내" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        용인푸르지오원클러스터 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>세대안내영상 안내 페이지입니다.</p>

      <div className={styles.textBox}>
        <div>용인 반도체클러스터의 눈부신 가치 위에 찾아오는</div>
        <div>푸르지오의 가치를 영상으로 확인해보세요</div>
      </div>

      {/* 탭 메뉴 */}
      <div className={styles.tabMenu}>
        {videoFiles.map((video) => (
          <button
            key={video.id}
            className={
              activeTab === video.id ? styles.activeTab : styles.tabButton
            }
            onClick={() => handleTabClick(video.id)}
          >
            {video.title}
          </button>
        ))}
      </div>

      {/* YouTube 동영상 표시 */}
      <div className={styles.videoContainer}>
        <iframe
          className={styles.videoPlayer}
          src={videoFiles.find((video) => video.id === activeTab)?.src}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default FloorPlanVideos;
