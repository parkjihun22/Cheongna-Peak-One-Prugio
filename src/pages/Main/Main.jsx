import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // SEO 메타 태그 추가를 위한 Helmet 임포트

// PC, 모바일 전용 CSS 모듈 (Main.module.scss 안에 모든 스타일을 넣은 경우)
import styles from "./Main.module.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FixIcon from "../../components/FixIcon/FixIcon";
import UnitplanBox from "../../components/UnitplanBox/UnitplanBox";
import MobilePopup from "../../components/MobilePopup/MobilePopup";
import Popup from "../../components/Popup/Popup";
import MobileSectionBox from "../../components/MobileSectionBox/MobileSectionBox";
import MobileOverviewSection from "../../components/MobileOverviewSection/MobileOverviewSection";
import DarkComplexSection from "../../components/DarkComplexSection/DarkComplexSection";
import InterestPopup from "../../components/InterestPopup/InterestPopup"; // 새 팝업 컴포넌트 import
// import UrlContainer from "../../components/UrlContainer/UrlContainer";\
import UnitInfoSection from "../../components/UnitInfoSection/UnitInfoSection";



import mainImage from "../../assets/Main/Main1.jpg";
import section1_Image1 from "../../assets/Main/section1-img1.jpg";
import section2_Image1 from "../../assets/Main/section2-img1.jpg";
import section3_Image1 from "../../assets/Main/section3-img1.png";
import section3_Image2 from "../../assets/Main/section3-img2.png";
import section3_Image3 from "../../assets/Main/section3-img3.png";
import section3_Image4 from "../../assets/Main/section3-img4.png";
import section4_Image1 from "../../assets/Main/section4-img1.jpg";
import section4_Image2 from "../../assets/Main/section4-img2.jpg";
import section4_Image3 from "../../assets/Main/section4-img3.jpg";
import section8Img3 from "../../assets/Main/section8Img3.jpg";
import mobileImageMain from "../../assets/Main/mobileMain1.jpg";
import popupPage1 from "../../assets/Popup/page1.jpg";
import popupPage2 from "../../assets/Popup/page2.jpg";
import popupPage3 from "../../assets/Popup/page3.jpg";
import popupPage4 from "../../assets/Popup/page3.jpg";

import mobilePopupPage1 from "../../assets/Popup/mobilepage1.jpg";
import mobilePopupPage2 from "../../assets/Popup/mobilepage2.jpg";
import mobilePopupPage3 from "../../assets/Popup/mobilepage3.jpg";
import mobilePopupPage4 from "../../assets/Popup/mobilepage3.jpg";
import map1 from "../../assets/Main/map1.jpg";
import mobilemap1 from "../../assets/Main/mobilemap1.jpg";

import subpinkimg from "../../assets/Main/subpinkimg.jpg";

const section3Contents = [
  {
    imgSrc: section3_Image1,
    title: "PREMIUM 01",
    text1: `총 507세대 중 144세대 일반공급`,
    text2: `55·59·84 다양한 평면 구성<br />
			      실용성과 브랜드 프리미엄을 동시에`,
    link: "/BusinessGuide/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image2,
    title: "PREMIUM 02",
    text1: `안양 박달2동 중심 입지`,
    text2: `주요 교통망 인접<br />
			      우수 학군과 생활 인프라를 누리는 단지`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image3,
    title: "PREMIUM 03",
    text1: `입주민 전용 커뮤니티`,
    text2: `체육시설, 휴게공간, 문화공간 등<br />
			      풍부한 생활 편의와 힐링 공간 제공`,
    link: "/LocationEnvironment/intro",
    linkText: "더 알아보기 >",
  },
  {
    imgSrc: section3_Image4,
    title: "PREMIUM 04",
    text1: `안정적인 미래가치`,
    text2: `신한아파트 재건축으로 실현되는<br />
			     고품격 주거 단지, 지역 가치 상승 기대`,
    link: "/LocationEnvironment/primium",
    linkText: "더 알아보기 >",
  },
];

const Main = () => {
  // 기존 상태 변수들
  const [isScroll, setIsScroll] = useState(false);
  const [page, setPage] = useState(1); // 페이지 세션 번호
  const [isScrolling, setIsScrolling] = useState(false); // 스크롤 중 여부
  const [isOpenPopup1, setIsOpenPopup1] = useState(true);
  const [isOpenPopup2, setIsOpenPopup2] = useState(true);
  const [isOpenPopup3, setIsOpenPopup3] = useState(true);
  const [isOpenPopup4, setIsOpenPopup4] = useState(true);
  const [isInterestPopupOpen, setIsInterestPopupOpen] = useState(false); // 방문예약 팝업 상태
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

  // 관심고객 등록 폼 상태 관리 (생년월일, 거주지역 필드 추가)
const [registration, setRegistration] = useState({
  name: "",
  phone: "",
  birthday: "",
  residence: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setRegistration((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  // 기존 제출 핸들러는 Formspree를 사용할 것이므로 제거(또는 사용하지 않음)
  // const handleRegistrationSubmit = (e) => {
  //   e.preventDefault();
  //   alert(
  //     `등록되었습니다!\n이름: ${registration.name}\n연락처: ${registration.phone}\n이메일: ${registration.email}\n방문일자: ${registration.visitDate}`
  //   );
  //   setRegistration({ name: "", phone: "", email: "", visitDate: "" });
  // };

  // 스크롤 시 헤더 변경 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PC에서만 페이지 전환 스크롤 이벤트 처리
  useEffect(() => {
    if (isMobile) return; // 모바일은 해당 없음

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      if (e.deltaY > 0) {
        if (page < 8.5) {
          setPage((prevPage) => prevPage + 1);
        }
      } else {
        if (page > 1) {
          setPage((prevPage) => prevPage - 1);
        }
      }
      setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling, isMobile]);

  // PC에서 페이지 번호에 따라 스크롤 이동
  useEffect(() => {
    if (isMobile) return;
    const posTop = (page - 1) * window.innerHeight;
    window.scrollTo({
      top: posTop,
      behavior: "smooth",
    });
  }, [page, isMobile]);

  return (
    <>
      {!isMobile ? (
        // PC 버전
        <>
          <Header isChanged={isScroll} />
          {/* {isOpenPopup1 && (
            <Popup
              onClosed={() => setIsOpenPopup1(false)}
              popupImage={popupPage1}
              numbering={1}
            />
          )}
          {!isOpenPopup1 && isOpenPopup2 && (
            <Popup
              onClosed={() => setIsOpenPopup2(false)}
              popupImage={popupPage2}
              numbering={2}
            />
          )}
          {!isOpenPopup2 && isOpenPopup3 && (
            <Popup
              onClosed={() => setIsOpenPopup3(false)}
              popupImage={popupPage3}
              numbering={3}
            />
          )} */}

          <div className={styles.imageContainer}>
            <img
              src={mainImage}
              className={styles.mainImage}
              alt="청주센텀푸르지오자이-mainimage1"
            />
            <div className={styles.overlay}></div>
            <div className={styles.mainImageTextBox}>
              <div className={styles.mainImageTextSub}>
                중층 단지 설계를 더불어{" "}
                <span className={styles.greyText}>브랜드 프리미엄</span> |
                507세대{" "}
                <span className={styles.greyText}>중대형 단지</span> |
                전용 55·59·84㎡ 다양한 평면{" "}
                <span className={styles.greyText}>혁신설계</span>
              </div>
              <div className={styles.mainImageTitleBox}>
                <div className={styles.mainImageText}>
                  안양의 주거 랜드마크
                </div>
                <div className={styles.mainImageLine}></div>
                <div className={styles.mainImageText}>청주 센텀 푸르지오자이</div>
              </div>
              {/* 기존 관심고객 등록 링크 대신 방문예약 버튼 클릭 시 팝업 오픈 */}
              <div>
                <button
                  onClick={() => setIsInterestPopupOpen(true)}
                  className={styles.subPinkBtn}
                >
                  <img
                    src={subpinkimg}
                    className={styles.subPinkImg}
                    alt="청주 센텀 푸르지오자이 관심고객등록"
                  />
                </button>
              </div>
            </div>
            <FixIcon type="absolute" />
          </div>

          <div className={styles.section}>
            <div className={styles.section1}>
              <div className={styles.textBox}>
                <div className={styles.text1}>Location</div>
                <div className={styles.text2}>
                  " 방문 예약 고객 전원 신세계상품권 100% 증정 "
                </div>
                <div className={styles.text3}>
                -안양 지하철 및 주요 도로 접근 용이, 서울 중심부 이동 편리
            <br />
            -단지 인근 초·중·고 우수 학군과 교육 환경 확보
            <br />
            -생활 편의 인프라: 대형마트, 쇼핑몰, 병원, 문화시설 등 생활권 내 집중
            <br />
            -입주민 전용 체육, 휴식, 문화 공간 등 풍부한 생활 프리미엄 커뮤니티 혜택
                </div>
                <div className={styles.text4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsInterestPopupOpen(true);
                    }}
                  >
                    관심고객 등록하기 {">"}
                  </a>
                </div>
              </div>
              <div className={styles.menuBox}>
                <img
                  src={section1_Image1}
                  alt="청주 센텀 푸르지오자이 브랜드소개-image2"
                />
                <Link to="/Brand/video" className={styles.btn}>
                  브랜드 소개 {">"}
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section8}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  소수만 누릴 수 있는
                  <br />
                  <span>
                    최고의 브랜드 아파트 <br />
                    청주센텀푸르지오자이
                  </span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    청주센텀푸르지오자이가 함께합니다
                  </div>
                </div>
              </div>
              <img
                src={section8Img3}
                alt="청주센텀푸르지오자이 입지환경소개-image2"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section2}>
              <div className={styles.textBox}>
                <div className={`${styles.text1} fadeUpRepeat`}>
                  완벽한 생활에서 준비된 미래까지
                </div>
                <div className={`${styles.text2} fadeUpRepeat`}>
                  기대한 모든 프리미엄이
                  <br />
                  청주센텀푸르지오자이에서 펼쳐집니다
                </div>
                <div className={`${styles.text3} fadeUpRepeat`}>
                  SPECIAL PLAN
                </div>
                <div className={`${styles.text4} fadeUpRepeat`}>
                  살수록 자부심이 차원이 다른
                  <br />
                  프리미엄 주거라이프를 실현합니다
                </div>
                <div className={`${styles.text5} fadeUpRepeat`}>
                  주거의 품격과 가치를 높이는 <span>특화설계</span>
                  <br />
                  안전한 이동을 위한 세심한 <span>단지설계</span>
                  <br />
                  편리한 생활을 위한 최적의 <span>공간설계</span>
                </div>
              </div>
              <img
                src={section2_Image1}
                alt="청주센텀푸르지오자이 아파트 조감도-image3"
              />
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section3}>
              {section3Contents.map((section, index) => (
                <div key={index} className={styles.box}>
                  <img src={section.imgSrc} alt={section.title} />
                  <div className={styles.boxTitle}>{section.title}</div>
                  <div
                    className={styles.boxText1}
                    dangerouslySetInnerHTML={{ __html: section.text1 }}
                  />
                  <div
                    className={styles.boxText2}
                    dangerouslySetInnerHTML={{ __html: section.text2 }}
                  />
                  <Link to={section.link} className={styles.boxText3}>
                    {section.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.section4}>
              <div className={styles.imageBox}>
                <img
                  src={section4_Image1}
                  alt="청주센텀푸르지오자이 브랜드소개-image4"
                />
                <div className={styles.text1}>청주센텀푸르지오자이</div>
                <div className={styles.text2}>THE NATURAL NOBILITY</div>
                <div className={styles.text3}>
                  당신의 삶, 그 고귀함이 계속되길
                </div>
              </div>
              <div className={styles.textBox}>
                <div className={styles.text1}>UNITPLAN</div>
                <UnitplanBox />
                <Link to="/FloorPlan/84A" className={styles.text2}>
                  더 알아보기 {">"}
                </Link>
              </div>
            </div>
          </div>
          <div id="interestForm" className={styles.section}></div>

          {/* ================== 방문예약 섹션 (PC) ================== */}
<div className={styles.pcVisitContainer}>
  {/* 상단 타이틀 영역 (좌: 제목/부제, 우: 안내문구) */}
  <div className={styles.pcTitleRow}>
    <div className={styles.leftTitle}>
      <h2>청주 센텀 푸르지오자이</h2>
      <p>방문예약</p>
    </div>
    <div className={styles.rightText}>
      방문예약 등록 시 모델하우스 주소 SMS발송 및
      <br />
      잔여세대를 안내드립니다.
    </div>
  </div>

  {/* 입력 폼 */}
  <form
    className={styles.pcVisitForm}
    action="https://formspree.io/f/mpwlzlyv"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />
  

    <label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />

    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <div className={styles.textBox}>
                <div className={styles.title}>
                  청주센텀푸르지오자이
                  <br />
                  <span>견본주택 오시는길</span>
                </div>
                <div className={styles.subTitle}>
                  <div className={styles.textLine}></div>
                  <div className={styles.subText}>
                    찬란한 비전에 완벽한 주거가치까지 더해
                    <br />
                    청주센텀푸르지오자이가 함께합니다
                  </div>
                </div>
              </div>
              <img src={map1} alt="청주센텀푸르지오자이 오시는길안내-image1" />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
          </div>
          {/* 방문예약 팝업 (PC) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </>
      ) : (
        // 모바일 버전
        <div className={styles.mobileMain}>
          {/* {isOpenPopup1 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup1(!isOpenPopup1)}
              popupImage={mobilePopupPage1}
              numbering={1}
            />
          )}
          {isOpenPopup2 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup2(!isOpenPopup2)}
              popupImage={mobilePopupPage2}
              numbering={2}
            />
          )}
          {isOpenPopup3 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup3(!isOpenPopup3)}
              popupImage={mobilePopupPage3}
              numbering={3}
            />
          )}
          {isOpenPopup4 && (
            <MobilePopup
              onClosed={() => setIsOpenPopup4(!isOpenPopup4)}
              popupImage={mobilePopupPage3}
              numbering={4}
            />
          )} */}

          <Header isChanged={isScroll} />

          <div className={styles.imageContainer}>
  <img
    src={mobileImageMain}
    className={styles.mainImage}
    alt="청주센텀푸르지오자이 mobilemain-image1"
  />
  <div className={styles.overlay}></div>

  {/* 기존 텍스트 */}
  <div className={styles.mainImageTextBox1}>
  <div className={styles.mainImageTextSub1}>
          중층 단지 설계로 쾌적한 주거 환경
          <br />
          <span className={styles.greyText1}>브랜드 프리미엄</span>
          <br />
          다양한 평면 제공
          <br />
          <span className={styles.greyText1}>실용적 설계</span>
          <br />
          입주민 전용 커뮤니티와 편의시설
          <br />
          <span className={styles.greyText1}>생활 편의 극대화</span>
        </div>
        <div className={styles.mainImageTitleBox1}>
          <div className={styles.mainImageText1}>
            청주 센텀 푸르지오자이
            <br />
          </div>

    </div>
  </div>
</div>

          
          

        <div className={styles.container1}>
          <div className={styles.text1}>Location</div>
          <div className={styles.text2}>
            청주 센텀 푸르지오자이의 중요 POINT
          </div>
          <div className={styles.text3}>
            -안양 지하철 및 주요 도로 접근 용이, 서울 중심부 이동 편리
            <br />
            -단지 인근 초·중·고 우수 학군과 교육 환경 확보
            <br />
            -생활 편의 인프라: 대형마트, 쇼핑몰, 병원, 문화시설 등 생활권 내 집중
            <br />
            -입주민 전용 체육, 휴식, 문화 공간 등 풍부한 생활 프리미엄 커뮤니티 혜택
          </div>
            <div className={styles.text4}>
              {/* 외부 링크 대신 방문예약 클릭 시 팝업 호출 */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsInterestPopupOpen(true);
                }}
                className={styles.popupBtn}
              >
                관심고객 등록하기 {">"}
              </a>
            </div>
          </div>
          <MobileOverviewSection />
                 {/* ─── 2.5. 중간에 풀-스크린 이미지 섹션 ───
         <div className={styles.mobileMiddleImage}>
           <img
             src={require("../../assets/Bener/event.jpg")}
            alt="단지 전경 추가 이미지"
             className={styles.middleImage}
           />
         </div> */}
          
         {/* ② DarkComplexSection 추가 */}
         <section className={styles.darkSection}>
           <DarkComplexSection />
         </section>

          {/* <div className={styles.container7}>
            <div className={styles.textBox}>
              <div className={styles.title}>
               안양의 중심으로 사는
                <br />
                <span>최고의 브랜드 아파트</span>
              </div>
              <div className={styles.subTitle}>
                <div className={styles.textLine}></div>
                <div className={styles.subText}>
                  완벽한 비전중심에서 완벽한 주거가치까지 더해
                  <br />
                  청주센텀푸르지오자이가 함께합니다
                </div>
              </div>
            </div>
            <img
              src={section8Img3}
              alt="청주센텀푸르지오자이 mobile입지안내-image1"
            />
          </div> */}

          <div className={styles.container3}>
            <div className={styles.textbox}>
              <div className={`${styles.text1} fadeUpRepeat`}>
                완벽한 생활에서 준비된 미래까지
              </div>
              <div className={`${styles.text2} fadeUpRepeat`}>
                기대한 모든 프리미엄이
                <br />
                청주센텀푸르지오자이에서 펼쳐집니다
              </div>
              <div className={`${styles.text3} fadeUpRepeat`}>SPECIAL PLAN</div>
              <div className={`${styles.text4} fadeUpRepeat`}>
                살수록 자부심이 차원이 다른
                <br />
                프리미엄 주거라이프를 청주센텀푸르지오자이에서<br />
                확인하세요
              </div>
            </div>
            <img
              src={section2_Image1}
              alt="청주센텀푸르지오자이 mobile조감도-image1"
            />
          </div>

          <UnitInfoSection />

          {/* <div className={styles.container4}>
            <div className={styles.text1}>UNITPLAN</div>
            <UnitplanBox />
            <Link to="/FloorPlan/84A" className={styles.text2}>
              <div>더 알아보기 &gt;</div>
            </Link>
          </div> */}

          <div className={styles.container6}>
            {section3Contents.map((section, idx) => (
              <MobileSectionBox
                key={idx}
                type={idx % 2 === 0 ? "left" : "right"}
                titleImag={section.imgSrc}
                title={section.title}
                subText1={section.text1}
                subText2={section.text2}
              />
            ))}
          </div>


          {/* <div className={styles.container2}>
            <div>
              <img
                src={section1_Image1}
                alt="청주센텀푸르지오자이 브랜드소개 mobile-image5"
              />
              <Link to="/Brand/intro" className={styles.btn}>
                브랜드 소개 {">"}
              </Link>
            </div>
          </div> */}

          {/* 모바일 방문예약 섹션 */}
<div className={styles.mobileVisitContainer}>
  <h2>청주 센텀 푸르지오자이</h2>
  <p className={styles.mobileSubTitle}>방문예약</p>
  <p className={styles.mobileInfoText}>
    방문예약 등록 시 모델하우스 주소 SMS발송 및<br />
    잔여세대를 안내드립니다.
  </p>

  <form
    className={styles.mobileVisitForm}
    action="https://formspree.io/f/mpwlzlyv"
    method="POST"
  >
    <label htmlFor="name">
      고객명 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="text"
      name="name"
      placeholder="고객명"
      value={registration.name}
      onChange={handleInputChange}
      required
    />

    <label htmlFor="phone">
      연락처 <span className={styles.redStar}>*</span>
    </label>
    <input
      type="tel"
      name="phone"
      placeholder="010-0000-0000"
      value={registration.phone}
      onChange={handleInputChange}
      required
    />

<label htmlFor="message">
      문의 내용
    </label>
    <textarea
      name="message"
      placeholder="문의 내용이 있을 경우 이곳에 남겨주세요."
      value={registration.message}
      onChange={handleInputChange}
      rows={5}
    />



    <button type="submit">등록하기</button>
  </form>
</div>

          {/* <div className={styles.section}>
            <div className={styles.section9}>
              <img
                src={mobilemap1}
                alt="청주센텀푸르지오자이 오시는길안내-mobileimage2"
              />
            </div>
          </div> */}

          <div className={styles.section5}>
            <Footer />
            <FixIcon />
          </div>
          {/* 방문예약 팝업 (모바일) */}
          {isInterestPopupOpen && (
            <InterestPopup
              onClose={() => setIsInterestPopupOpen(false)}
              registration={registration}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Main;
