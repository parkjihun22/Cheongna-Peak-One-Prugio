// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/premium02.jpg";
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
          <span>청주 센텀 푸르지오자이</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>
            경기도 안양시 만안구 박달2동 111-1일원
          </span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>
            지하 2층 ~ 지상 15층, 총 4개동
          </span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>
            전용 55㎡, 59㎡, 84㎡
          </span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>
            총 507세대 (일반공급 144세대)
          </span>
        </li>
        <li>
          <strong>시행사</strong>
          <span>
            신한아파트 재건축정비사업조합
          </span>
        </li>
        <li>
          <strong>시공사</strong>
          <span>
            HDC현대산업개발(주)
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
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            안양 박달2동 재건축 단지에서 누리는<br />
            실용적 평면과 커뮤니티가 있는 1군 브랜드 아파트
          </p>
        </div>
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "중소형 맞춤형 평면으로 실용성 극대화",
      desc:
        "총 507세대, 55·59·84평형 구성<br />입주민 중심의 실용적 설계 적용",
    },
    {
      img: slide2,
      title: "생활 편의와 의료 인프라 인접",
      desc:
        "단지 인근 주요 병원 및 약국<br />우수 학군과 편리한 생활시설 확보",
    },
    {
      img: slide3,
      title: "편리한 광역 교통망",
      desc:
        "버스·지하철 등 대중교통 접근 용이<br />안양 주요 도로 연결로 이동 편리",
    },
    {
      img: slide4,
      title: "학교, 쇼핑, 문화시설을 가까이",
      desc: "단지 인근 초등학교, 중학교, 학원가<br />편의점, 마트, 공원 등 생활 인프라 풍부",
    },
    {
      img: slide5,
      title: "507세대 재건축 단지 프리미엄",
      desc:
        "총 507세대 청주센텀푸르지오자이<br />브랜드 프리미엄과 커뮤니티, 멀티 발코니 적용",
    },
    {
      img: slide6,
      title: "HDC현대산업개발 시공",
      desc: "입주민 중심 설계와 쾌적한 주거환경 제공",
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
        <div className={styles.preTitle}>PEAKONE PRUGIO BUSINESS</div>
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
