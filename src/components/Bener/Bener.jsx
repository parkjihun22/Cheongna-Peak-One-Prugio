import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="호현 센트럴 아이파크 배너 이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '아이파크' || text === '홍보영상' || text === '체크포인트'| text === '당첨자서류안내') {
        return (
            <>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                안양 박달2동 중심에서 누리는 실용적 프리미엄
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                생활과 편리함이 만나는 곳
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                신뢰의 1군 브랜드, 호현 센트럴 아이파크
            </div>
            </>
        );
    } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
        return (
            <>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                안양 박달2동 재건축, 새로운 삶의 기준
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                실용적 평면과 쾌적한 커뮤니티 공간
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                입주민 중심 설계로 완성된 주거 프리미엄
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                호현 센트럴 아이파크
            </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                안양 중심 생활 인프라를 가까이에서
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                교육, 쇼핑, 병원, 문화 모든 것이 한 걸음
            </div>
            </>
        );
    } else if (text === '단지안내' || text === 'E-모델하우스' ) {
        return (
            <>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                단지 곳곳에 적용된 특화 설계
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                실용성과 쾌적함을 겸비한 주거 공간
            </div>
            <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                안양 박달2동의 핵심 입지, 호현 센트럴 아이파크
            </div>
            </>
        );
    }
};
