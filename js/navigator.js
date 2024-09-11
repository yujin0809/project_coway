// const get = (target) => document.querySelector(target);
// const getAll = (target) => document.querySelectorAll(target);
const translateNav = () => {
    let nav1 = '';
    let nav2 = '';
    let nav3 = '';
    let nav4 = '';
    let nav5 = '';

    // nav1 - 폴더
    if (location.pathname.split('/')[2] === 'products') nav1 = '제품';
    if (location.pathname.split('/')[2] === 'story') nav1 = '추천 컨텐츠';

    if (location.pathname.split('/')[2] === 'store') nav1 = '매장';

    if (location.pathname.split('/')[2] === 'service') nav1 = '서비스';

    if (location.pathname.split('/')[2] === 'event') nav1 = '이벤트/혜택';

    if (location.pathname.split('/')[2] === 'cs') nav1 = '고객지원';

    if (location.pathname.split('/')[2] === 'myPage') nav1 = '마이코웨이';

    // nav2 - 폴더 (상세페이지)
    if (location.pathname.split('/')[3] === 'lifeelc') nav2 = '주방/생활가전';

    if (location.pathname.split('/')[3] === 'productService') nav2 = '제품 관리 서비스';
    if (location.pathname.split('/')[3] === 'totalCareService') nav2 = '토탈케어서비스';
    if (location.pathname.split('/')[3] === 'filterService') nav2 = '필터회수 서비스';
    if (location.pathname.split('/')[3] === 'codymatching') nav2 = '실시간 코디매칭';
    if (location.pathname.split('/')[3] === 'iocareService') nav2 = 'IoCare 서비스';

    if (location.pathname.split('/')[3] === 'progressing') nav2 = '이벤트';
    if (location.pathname.split('/')[3] === 'winnering') nav2 = '이벤트';

    if (location.pathname.split('/')[3] === 'csBoard') nav2 = '고객 게시판';
    if (location.pathname.split('/')[3] === 'csProduct') nav2 = '제품 사용 지원';
    if (location.pathname.split('/')[3] === 'csContact') nav2 = '문의 지원';

    if (location.pathname.split('/')[3] === 'myPage') nav2 = '마이코웨이';

    // nav2 - html
    /* if (location.pathname.split('/')[3] === 'lifeelc') nav2 = '주방/생활가전';
    if (location.pathname.split('/')[3] === 'waterelc') nav2 = '룰루비데/연수기';
    if (location.pathname.split('/')[3] === 'berexelc') nav2 = 'BEREX 매트리스/안마의자';
    if (location.pathname.split('/')[3] === 'refurb') nav2 = '리퍼브 기획전';
    if (location.pathname.split('/')[3] === 'bestreview') nav2 = '베스트 리뷰';
    if (location.pathname.split('/')[3] === 'introduce') nav2 = '코웨이 매장 소개';
    if (location.pathname.split('/')[3] === 'reservation') nav2 = '체험 예약';
    if (location.pathname.split('/')[3] === 'reserCheck') nav2 = '체험 예약 조회';
    if (location.pathname.split('/')[3] === 'otherVendor') nav2 = '기타 판매처';
    if (location.pathname.split('/')[3] === 'heartService') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'airCare') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'bidet') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'waterSoftener') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'affiliateCard') nav2 = '제휴카드';
    if (location.pathname.split('/')[3] === 'cowayLive') nav2 = '코웨이LiVE';
    if (location.pathname.split('/')[3] === 'csHome.html') nav2 = '고객지원 홈'; */
    if (location.pathname.split('/')[3] === 'lifeelc.html') nav2 = '주방/생활가전';
    if (location.pathname.split('/')[3] === 'waterelc.html') nav2 = '룰루비데/연수기';
    if (location.pathname.split('/')[3] === 'berexelc.html') nav2 = 'BEREX 매트리스/안마의자';
    if (location.pathname.split('/')[3] === 'refurb.html') nav2 = '리퍼브 기획전';
    if (location.pathname.split('/')[3] === 'bestreview.html') nav2 = '베스트 리뷰';

    if (location.pathname.split('/')[3] === 'introduce.html') nav2 = '코웨이 매장 소개';
    if (location.pathname.split('/')[3] === 'reservation.html') nav2 = '체험 예약';
    if (location.pathname.split('/')[3] === 'reserCheck.html') nav2 = '체험 예약 조회';
    if (location.pathname.split('/')[3] === 'otherVendor.html') nav2 = '기타 판매처';

    if (location.pathname.split('/')[3] === 'heartService.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'airCare.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'bidet.html') nav2 = '하트서비스';
    if (location.pathname.split('/')[3] === 'waterSoftener.html') nav2 = '하트서비스';

    if (location.pathname.split('/')[3] === 'affiliateCard.html') nav2 = '제휴카드';
    if (location.pathname.split('/')[3] === 'cowayLive.html') nav2 = '코웨이LiVE';

    if (location.pathname.split('/')[3] === 'csHome.html') nav2 = '고객지원 홈';

    // nav3 - 폴더
    if (location.pathname.split('/')[4] === 'csNoticePost') nav3 = '공지사항';
    if (location.pathname.split('/')[4] === 'csFaqPost') nav3 = '자주 찾는 질문';

    // nav3 - html (상세페이지) + localStorage 사용
    let detailData = '';
    if (localStorage.getItem('productDetail') !== null) detailData = JSON.parse(localStorage.getItem('productDetail'));
    if (location.pathname.split('/')[4] === 'lifeelcDetail.html') {
        if (detailData.category === 'etc') nav3 = '기타';
        else if (detailData.category === 'electricRange') nav3 = '전기레인지';
        else if (detailData.category === 'bidet') {
            nav2 = '룰루비데/연수기';
            nav3 = '룰루 비데';
        } else if (detailData.category === 'trainingPeriod') {
            nav2 = '룰루비데/연수기';
            nav3 = '연수기';
        } else if (detailData.category === 'massageChair') {
            nav2 = 'BEREX 매트리스/안마의자';
            nav3 = '안마의자';
        } else if (detailData.category === 'massageBed') {
            nav2 = 'BEREX 매트리스/안마의자';
            nav3 = '안마베드';
        }
        if (detailData.category.includes('refurb') && detailData.category.includes('Bidet')) {
            nav2 = '리퍼브 기획전';
            nav3 = '비데';
        }
        if (detailData.category.includes('refurb') && detailData.category.includes('TrainingPeriod')) {
            nav2 = '리퍼브 기획전';
            nav3 = '정수기';
        }
    }

    if (location.pathname.split('/')[4] === 'prizeWinner.html') nav3 = '당첨자 발표';
    if (location.pathname.split('/')[4] === 'eventsinProgress.html') {
        nav3 = '진행중 이벤트';
    }

    if (location.pathname.split('/')[4] === 'as_step1.html') nav3 = 'A/S·이전설치 신청';
    if (location.pathname.split('/')[4] === 'as_step2.html') nav3 = 'A/S·이전설치 신청';
    if (location.pathname.split('/')[4] === 'faq.html') nav3 = '자주 찾는 질문';
    if (location.pathname.split('/')[4] === 'fareGuarantee_step1.html') nav3 = '요금/보증 안내';
    if (location.pathname.split('/')[4] === 'fareGuarantee_step2.html') nav3 = '요금/보증 안내';
    if (location.pathname.split('/')[4] === 'manual.html') nav3 = '제품 사용설명서 찾기';
    if (location.pathname.split('/')[4] === 'transfer_step1.html') nav3 = '양도양수 서비스';
    if (location.pathname.split('/')[4] === 'transfer_step2.html') nav3 = '양도양수 서비스';
    if (location.pathname.split('/')[4] === 'transfer_step3.html') nav3 = '양도양수 서비스';
    if (location.pathname.split('/')[4] === 'contact.html') nav3 = '1:1 문의';
    if (location.pathname.split('/')[4] === 'notice.html') nav3 = '공지사항';

    // nav4 - html

    // ---
    const navSpans = document.querySelector('#wrap navigator .nav .inner');
    if (location.pathname.split('/')[2] !== undefined) {
        const spanNav1 = document.createElement('span');
        spanNav1.textContent = nav1;
        navSpans.append(spanNav1);
    }
    if (location.pathname.split('/')[3] !== undefined) {
        const spanNav2 = document.createElement('span');
        spanNav2.textContent = nav2;
        navSpans.append(spanNav2);
    }
    if (location.pathname.split('/')[4] !== undefined) {
        const spanNav3 = document.createElement('span');
        spanNav3.textContent = nav3;
        navSpans.append(spanNav3);
    }
    if (location.pathname.split('/')[5] !== undefined) {
        const spanNav4 = document.createElement('span');
        spanNav4.textContent = nav4;
        navSpans.append(spanNav4);
    }
    if (location.pathname.split('/')[6] !== undefined) {
        const spanNav5 = document.createElement('span');
        spanNav5.textContent = nav5;
        navSpans.append(spanNav5);
    }
    // title
    const title = document.querySelector('head title');
    if (nav5) {
        title.innerHTML = `${nav5} | 코웨이`;
    } else if (nav4) {
        title.innerHTML = `${nav4} | 코웨이`;
    } else if (nav3) {
        title.innerHTML = `${nav3} | 코웨이`;
    } else {
        title.innerHTML = `${nav2} | 코웨이`;
    }

    // 마이페이지 title
    if (location.pathname.split('/').pop() === 'myPage') {
        const title1 = document.querySelector('head title');
        title1.innerHTML = ` 마이코웨이 | 코웨이`;
    }
};
// 합치기
const openNavigator = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#navigator') {
                    document.querySelector(tag).innerHTML = res;

                    translateNav();
                }
            });
    };
    getPage('/page/navigator.html', '#navigator');
};
// 실행
(() => {
    openNavigator();
})();
