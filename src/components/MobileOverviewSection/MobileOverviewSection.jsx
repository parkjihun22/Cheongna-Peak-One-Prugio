// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>청라 피크원 푸르지오</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            [1단지] 인천시 처인구 남동 산126-13<br />
            [2단지] 인천시 처인구 남동 산126-1일원<br />
            [3단지] 인천시 처인구 남동 243일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            [1단지] 지하 4층 ~ 지상 28층<br />
            [2단지] 지하 3층 ~ 지상 28층<br />
            [3단지] 지하 4층 ~ 지상 26층
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            [1단지] 59A·B / 84A·B·C / 130㎡<br />
            [2단지] 59A·B / 84A·B·C<br />
            [3단지] 84A·B·C
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
            [1단지] 1,681세대<br />
            [2단지] 1,804세대<br />
            [3단지] 239세대
          </span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            반도체 클러스터의 중심으로 사는<br />
            최고의 브랜드 아파트
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "미래가치를 높여주는 청라반도체벨트",
      desc:
        "삼성 · SK하이닉스 반도체 클러스터(계획), <br />청라반도체 클러스터 일반산업단지 L자형 반도체벨트의 비전",
    },
    {
      img: slide2,
      title: "의세권을 누리릴 수 있는 프리미엄",
      desc:
        "오래된 의료경력을 갖고 있는<br />500병상 규모 명지병원 인접",
    },
    {
      img: slide3,
      title: "광역으로 통하는 특급 교통",
      desc:
        "국도42호선,국도45호선, 세종-포천고속도로 등 <br />편리한 교통망에 더해지는 반도체 클러스터",
    },
    {
      img: slide4,
      title: "학교, 쇼핑,병원, 문화를 더 가깝게 <br /> 한걸음에 SMART 인프라",
      desc: "대형 피트니스, 골프연습장, 독서실 등 입주민 전용 시설",
    },
    {
      img: slide5,
      title: "3,724세대 푸르지오 대단지 프리미엄",
      desc:
        "총 3,724세대 청라피크원푸르지오 메가타운으로 찾아옵니다",
    },
    {
      img: slide6,
      title: "확정된 미래가치 보장",
      desc: "반도체 클러스터 연계 기대수익 및 브랜드 가치 상승",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>ONE CLUSTER BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
