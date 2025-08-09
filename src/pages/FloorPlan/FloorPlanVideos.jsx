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

      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="세대안내" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        호현센트럴아이파크 - 홍보영상
      </h1>
      <p className={styles.screenReaderOnly}>세대안내영상 안내 페이지입니다.</p>

      <div className={styles.textBox}>
        <div>안양의 눈부신 가치 위에 찾아오는</div>
        <div>아이파크의 가치를 영상으로 확인해보세요</div>
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
