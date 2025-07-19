import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './ComplexGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";


const ComplexGuide1 = () => {
	const menuContents = [
		{ title: "단지 배치도", url: "/ComplexGuide/intro" },
		{ title: "호수 배치도", url: "/ComplexGuide/detailintro" },
		{ title: "커뮤니티", url: "/ComplexGuide/community" },
	];
	const [isScroll, setIsScroll] = useState(false);
	const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	// 이미지가 로드되면 호출되는 함수
	const handleImageLoad = () => {
		setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
	};

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>


			<Header isChanged={isScroll} />
			<FixIcon />
			<Bener title="단지안내" />
			<MenuBar contents={menuContents} />
			{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
            <h1 className={styles.screenReaderOnly}>청라 피크원 푸르지오 - 단지배치도</h1>
			<p className={styles.screenReaderOnly}>단지 배치도 페이지는 청라 피크원 푸르지오의 전체 단지 구성도를 제공합니다. 아파트 단지 내 세대 배치, 공용 시설, 주차 공간 등을 시각적으로 보여주어 입주자들이 공간 배치에 대해 명확하게 이해할 수 있도록 돕습니다. 이 배치도를 통해 단지 내 생활을 더 쉽게 계획할 수 있습니다.
			</p>



			<div className={styles.textBox}>
				<div>청라 피크원 푸르지오가 눈부신 가치 위에</div>
				<div>새로운 자부심으로 찾아옵니다.</div>
			</div>

			{/* 이미지에 애니메이션 효과 추가 */}
			<img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="청라 피크원 푸르지오 단지배치도-image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>




			<div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 상기 단지배치도 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
				</div>
				
			</div>

			<Footer />
		</div>
	);
}

export default ComplexGuide1;
