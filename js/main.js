// 메인 함수
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

// 비주얼 슬라이드
const visualSlide = () => {
    const $slides = get('.main .visual .slide-wrap .slides');
    const $prevBtn = get('.main .visual .slide-wrap .slide-btn .prev');
    const $nextBtn = get('.main .visual .slide-wrap .slide-btn .next');
    const $slide = getAll('.main .visual .slide-wrap .slides .slide-item');
    let currentIdx = 0,
        slideCount = $slide.length,
        slideWidth = 1400,
        slideMargin = 20;
    let isAnimating = false;
    let timer = null;

    makeClone();

    function makeClone() {
        for (let i = 0; i < slideCount; i++) {
            let cloneSlide = $slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            $slides.appendChild(cloneSlide);
        }
        for (let i = slideCount - 1; i >= 0; i--) {
            let cloneSlide = $slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            $slides.prepend(cloneSlide);
        }
        updateWidth();
        setInitialPos();

        setTimeout(() => {
            $slides.classList.add('animated');
        }, 100);
    }

    function updateWidth() {
        let $currentSlides = get('.main .visual .slide-wrap .slides .slide-item');
        let newSlideCount = $currentSlides.length;

        let newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';

        $slides.style.width = newWidth;
    }

    function setInitialPos() {
        let initialTranslateVal = -(slideWidth + slideMargin) * slideCount;
        $slides.style.transform = `translateX(${initialTranslateVal}px)`;
    }

    $nextBtn.addEventListener('click', function () {
        moveSlide(currentIdx + 1);
        sliding();
    });
    $prevBtn.addEventListener('click', function () {
        moveSlide(currentIdx - 1);
        sliding();
    });

    sliding();

    function sliding() {
        clearInterval(timer);
        timer = setInterval(() => {
            moveSlide(currentIdx + 1);
        }, 4000);
    }

    function moveSlide(num) {
        if (isAnimating) return;

        isAnimating = true;
        $slides.style.left = -num * (slideWidth + slideMargin) + 100 + 'px';

        currentIdx = num;

        function updateButtonBackgrounds(status) {
            if (status === -1 || status === -2 || status === 3 || status === 4) {
                $prevBtn.style.setProperty('--background-image-l', 'url(../images/main/arr_slide_l.png)');
                $nextBtn.style.setProperty('--background-image-r', 'url(../images/main/arr_slide_r.png)');
            } else {
                $prevBtn.style.setProperty('--background-image-l', 'url(../images/main/arr_slide_l2.png)');
                $nextBtn.style.setProperty('--background-image-r', 'url(../images/main/arr_slide_r2.png)');
            }
        }
        updateButtonBackgrounds(currentIdx + 1);

        if (currentIdx == slideCount || currentIdx == -slideCount) {
            setTimeout(function () {
                $slides.classList.remove('animated');
                $slides.style.left = '100px';
                currentIdx = 0;
            }, 800);
            setTimeout(function () {
                $slides.classList.add('animated');
                isAnimating = false;
            }, 900);
        } else {
            setTimeout(() => {
                isAnimating = false;
            }, 800);
        }
    }

    $slides.addEventListener('mouseenter', (e) => {
        clearInterval(timer);
    });
    $slides.addEventListener('mouseleave', (e) => {
        timer = setInterval(() => {
            moveSlide(currentIdx + 1);
        }, 4000);
    });
};

// 제품 탭
const productTab = () => {
    const arr01 = [
        {
            title: 'BEREX 안마의자 페블체어',
            desc: '감각적인 실루엣으로 완성된 트렌디한 릴랙스 체어',
            imgUrl: './images/main/main_tab1_01.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 안마의자 마인',
            desc: '컴팩트한 안마의자로 가장 퍼펙트한 휴식의 완성',
            imgUrl: './images/main/main_tab1_02.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 안마의자 마인 플러스',
            desc: '최상의 휴식을 위한 전동 리클라이닝 안마의자',
            imgUrl: './images/main/main_tab1_03.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 안마의자 시그니처',
            desc: '14가지 안마코스로 더욱 강력하고 정교해진 마사지',
            imgUrl: './images/main/main_tab1_04.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 리클라이닝 안마베드',
            desc: '시작과 끝을 편안하게 국내 최초 리클라이닝 안마베드',
            imgUrl: './images/main/main_tab1_05.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 시그니처 매트리스',
            desc: '아름다운 실루엣으로 완성된 차원이 다른 편안함',
            imgUrl: './images/main/main_tab1_06.jpg',
            url: '/page/products/berexelc.html',
        },
        {
            title: 'BEREX 볼륨 프레임',
            desc: '인테리어의 무드를 바꾸는 모던하고 트렌디한 프레임',
            imgUrl: './images/main/main_tab1_07.jpg',
            url: '/page/products/berexelc.html',
        },
    ];
    const arr02 = [
        { title: '더블케어 비데', desc: '전기 분해수로 한 번, 버블로 한 번 더', imgUrl: './images/main/main_tab2_01.png', url: '/page/products/waterelc.html' },
        {
            title: '더블케어 플러스 비데',
            desc: '더블케어에 자동 개폐로 편의성까지, 더블케어 플러스',
            imgUrl: './images/main/main_tab2_02.png',
            url: '/page/products/waterelc.html',
        },
        {
            title: '프라임 비데',
            desc: '여름맞이 클린패키지 렌탈하고 최대 5만원 혜택받기',
            imgUrl: './images/main/main_tab2_03.jpg',
            url: '/page/products/waterelc.html',
        },
        {
            title: '스타일케어 비데',
            desc: '욕실 인테리어까지 생각한 콤팩트하고 스타일리시한 디자인',
            imgUrl: './images/main/main_tab2_04.jpg',
            url: '/page/products/waterelc.html',
        },
        {
            title: '스스로케어 비데(일반형)',
            desc: '유로, 노즐, 도기까지 더 꼼꼼해진 3단계 살균',
            imgUrl: './images/main/main_tab2_05.png',
            url: '/page/products/waterelc.html',
        },
        {
            title: '스킨플러스 연수기',
            desc: '내 피부에 닿는 물까지, 피부를 더 부드럽고 촉촉하게',
            imgUrl: './images/main/main_tab2_06.png',
            url: '/page/products/waterelc.html',
        },
        {
            title: '연수기',
            desc: '연수기로 케어하세요, 365일 깨끗하고 윤기있는 피부',
            imgUrl: './images/main/main_tab2_07.png',
            url: '/page/products/waterelc.html',
        },
    ];
    const arr03 = [
        {
            title: 'W인덕션 3구',
            desc: '렌탈료 3회 면제, 취향에 맞게 선택할 수 있는 w인덕션',
            imgUrl: './images/main/main_tab3_01.png',
            url: '/page/products/lifeelc.html',
        },
        {
            title: '노블 인덕션 All-Free',
            desc: '코드형으로 만나는 All-Free 인덕션',
            imgUrl: './images/main/main_tab3_02.png',
            url: '/page/products/lifeelc.html',
        },
        {
            title: '노블 인덕션 900mm 와이드',
            desc: '900mm 와이드 인덕션으로 더욱 넓어진 주방 만나기',
            imgUrl: './images/main/main_tab3_03.png',
            url: '/page/products/lifeelc.html',
        },
        {
            title: '프라임 하이브리드',
            desc: '90만원대로 만나는 합리적인 프라임 하이드리드',
            imgUrl: './images/main/main_tab3_04.png',
            url: '/page/products/lifeelc.html',
        },
        {
            title: '프라임S',
            desc: '고화력 파워 부스터로 요리를 더 빠르고 간편하게',
            imgUrl: './images/main/main_tab3_05.png',
            url: '/page/products/lifeelc.html',
        },
        {
            title: '프라임S 하이라이트',
            desc: '고화력 하이퍼 모드로 요리를 더 빠르고 간편하게',
            imgUrl: './images/main/main_tab3_06.png',
            url: '/page/products/lifeelc.html',
        },
        { title: '프라임', desc: '인덕션과 하이라이트의 장점을 결합한 인덕션', imgUrl: './images/main/main_tab3_07.png', url: '/page/products/lifeelc.html' },
    ];
    const moreView = `#`;

    const $tabFst = get('.main .productsTab .tab-area-fst');
    const $tabSec = get('.main .productsTab .tab-area-sec');
    const $tabTrd = get('.main .productsTab .tab-area-trd');

    const $lis = getAll('.main .productsTab .tab-tit ul li');

    $tabFst.innerHTML = `
    <div class="tab-item">
        <a href="${arr01[0].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[0].imgUrl})'></div>
            </div>
            <strong>${arr01[0].title}</strong>
            <p>${arr01[0].desc}</p>
        </a>
    </div>
    <div class="tab-item">
        <a href="${arr01[1].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[1].imgUrl})'></div>
            </div>
            <strong>${arr01[1].title}</strong>
            <p>${arr01[1].desc}</p>
        </a>
    </div>
`;
    $tabSec.innerHTML = `
    <div class="tab-item">
        <a href="${arr01[2].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[2].imgUrl})'></div>
            </div>
            <strong>${arr01[2].title}</strong>
            <p>${arr01[2].desc}</p>
        </a>
    </div>
    <div class="tab-item">
        <a href="${arr01[3].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[3].imgUrl})'></div>
            </div>
            <strong>${arr01[3].title}</strong>
            <p>${arr01[3].desc}</p>
        </a>
    </div>
    <div class="tab-item">
        <a href="${arr01[4].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[4].imgUrl})'></div>
            </div>
            <strong>${arr01[4].title}</strong>
            <p>${arr01[4].desc}</p>
        </a>
    </div>
    <a href="${arr01[0].url}" class="btn-more">전체보기</a>
`;
    $tabTrd.innerHTML = `
    <div class="tab-item">
        <a href="${arr01[5].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[5].imgUrl})'></div>
            </div>
            <strong>${arr01[5].title}</strong>
            <p>${arr01[5].desc}</p>
        </a>
    </div>
    <div class="tab-item">
        <a href="${arr01[6].url}">
            <div class="img-wrap">
                <div class="img" style='background-image: url(${arr01[6].imgUrl})'></div>
            </div>
            <strong>${arr01[6].title}</strong>
            <p>${arr01[6].desc}</p>
        </a>
    </div>
`;

    $lis.forEach((li, idx) => {
        li.addEventListener('click', (e) => {
            $lis.forEach((item) => {
                item.classList.remove('active');
            });
            li.classList.add('active');

            let num = idx + 1;

            switch (num) {
                case 1:
                    $tabFst.innerHTML = `
                    <div class="tab-item">
                        <a href="${arr01[0].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[0].imgUrl})'></div>
                            </div>
                            <strong>${arr01[0].title}</strong>
                            <p>${arr01[0].desc}</p>
                        </a>
                    </div>
                    <div class="tab-item">
                        <a href="${arr01[1].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[1].imgUrl})'></div>
                            </div>
                            <strong>${arr01[1].title}</strong>
                            <p>${arr01[1].desc}</p>
                        </a>
                    </div>
`;
                    $tabSec.innerHTML = `
                    <div class="tab-item">
                        <a href="${arr01[2].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[2].imgUrl})'></div>
                            </div>
                            <strong>${arr01[2].title}</strong>
                            <p>${arr01[2].desc}</p>
                        </a>
                    </div>
                    <div class="tab-item">
                        <a href="${arr01[3].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[3].imgUrl})'></div>
                            </div>
                            <strong>${arr01[3].title}</strong>
                            <p>${arr01[3].desc}</p>
                        </a>
                    </div>
                    <div class="tab-item">
                        <a href="${arr01[4].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[4].imgUrl})'></div>
                            </div>
                            <strong>${arr01[4].title}</strong>
                            <p>${arr01[4].desc}</p>
                        </a>
                    </div>
                    <a href="${arr01[0].url}" class="btn-more">전체보기</a>
`;
                    $tabTrd.innerHTML = `
                    <div class="tab-item">
                        <a href="${arr01[5].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[5].imgUrl})'></div>
                            </div>
                            <strong>${arr01[5].title}</strong>
                            <p>${arr01[5].desc}</p>
                        </a>
                    </div>
                    <div class="tab-item">
                        <a href="${arr01[6].url}">
                            <div class="img-wrap">
                                <div class="img" style='background-image: url(${arr01[6].imgUrl})'></div>
                            </div>
                            <strong>${arr01[6].title}</strong>
                            <p>${arr01[6].desc}</p>
                        </a>
                    </div>
`;
                    break;
                case 2:
                    $tabFst.innerHTML = `
                <div class="tab-item">
                    <a href="${arr02[0].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[0].imgUrl})'></div>
                        </div>
                        <strong>${arr02[0].title}</strong>
                        <p>${arr02[0].desc}</p>
                    </a>
                </div>
                <div class="tab-item">
                    <a href="${arr02[1].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[1].imgUrl})'></div>
                        </div>
                        <strong>${arr02[1].title}</strong>
                        <p>${arr02[1].desc}</p>
                    </a>
                </div>
`;
                    $tabSec.innerHTML = `
                <div class="tab-item">
                    <a href="${arr02[2].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[2].imgUrl})'></div>
                        </div>
                        <strong>${arr02[2].title}</strong>
                        <p>${arr02[2].desc}</p>
                    </a>
                </div>
                <div class="tab-item">
                    <a href="${arr02[3].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[3].imgUrl})'></div>
                        </div>
                        <strong>${arr02[3].title}</strong>
                        <p>${arr02[3].desc}</p>
                    </a>
                </div>
                <div class="tab-item">
                    <a href="${arr02[4].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[4].imgUrl})'></div>
                        </div>
                        <strong>${arr02[4].title}</strong>
                        <p>${arr02[4].desc}</p>
                    </a>
                </div>
                <a href="${arr02[0].url}" class="btn-more">전체보기</a>
`;
                    $tabTrd.innerHTML = `
                <div class="tab-item">
                    <a href="${arr02[5].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[5].imgUrl})'></div>
                        </div>
                        <strong>${arr02[5].title}</strong>
                        <p>${arr02[5].desc}</p>
                    </a>
                </div>
                <div class="tab-item">
                    <a href="${arr02[6].url}">
                        <div class="img-wrap">
                            <div class="img" style='background-image: url(${arr02[6].imgUrl})'></div>
                        </div>
                        <strong>${arr02[6].title}</strong>
                        <p>${arr02[6].desc}</p>
                    </a>
                </div>
`;
                    break;
                case 3:
                    $tabFst.innerHTML = `
                        <div class="tab-item">
                            <a href="${arr03[0].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[0].imgUrl})'></div>
                                </div>
                                <strong>${arr03[0].title}</strong>
                                <p>${arr03[0].desc}</p>
                            </a>
                        </div>
                        <div class="tab-item">
                            <a href="${arr03[1].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[1].imgUrl})'></div>
                                </div>
                                <strong>${arr03[1].title}</strong>
                                <p>${arr03[1].desc}</p>
                            </a>
                        </div>
    `;
                    $tabSec.innerHTML = `
                        <div class="tab-item">
                            <a href="${arr03[2].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[2].imgUrl})'></div>
                                </div>
                                <strong>${arr03[2].title}</strong>
                                <p>${arr03[2].desc}</p>
                            </a>
                        </div>
                        <div class="tab-item">
                            <a href="${arr03[3].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[3].imgUrl})'></div>
                                </div>
                                <strong>${arr03[3].title}</strong>
                                <p>${arr03[3].desc}</p>
                            </a>
                        </div>
                        <div class="tab-item">
                            <a href="${arr03[4].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[4].imgUrl})'></div>
                                </div>
                                <strong>${arr03[4].title}</strong>
                                <p>${arr03[4].desc}</p>
                            </a>
                        </div>
                        <a href="${arr03[0].url}" class="btn-more">전체보기</a>
    `;
                    $tabTrd.innerHTML = `
                        <div class="tab-item">
                            <a href="${arr03[5].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[5].imgUrl})'></div>
                                </div>
                                <strong>${arr03[5].title}</strong>
                                <p>${arr03[5].desc}</p>
                            </a>
                        </div>
                        <div class="tab-item">
                            <a href="${arr03[6].url}">
                                <div class="img-wrap">
                                    <div class="img" style='background-image: url(${arr03[6].imgUrl})'></div>
                                </div>
                                <strong>${arr03[6].title}</strong>
                                <p>${arr03[6].desc}</p>
                            </a>
                        </div>
    `;
                    break;
            }
        });
    });
};

// 추천 제품 스크롤
const recommend = () => {
    const $conBox = getAll('.main .recommend .con-box');
    $conBox.forEach((box) => {
        box.addEventListener('wheel', (e) => {
            // 스크롤이 왼쪽 또는 오른쪽 끝에 도달했는지 확인
            const atLeftEnd = box.scrollLeft === 10;
            const atRightEnd = box.scrollLeft + box.offsetWidth >= box.scrollWidth;

            const scrollingUp = e.deltaY < 0;
            const scrollingDown = e.deltaY > 100;

            if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
                // 스크롤이 양 끝에 있고 사용자가 해당 방향으로 계속 스크롤하려고 하면,
                // 이벤트의 기본 동작을 수행하여 수직 스크론을 허용합니다.
                return;
            }

            // 그렇지 않으면, 가로 스크롤을 진행합니다.
            e.preventDefault();
            // noinspection JSSuspiciousNameCombination
            box.scrollLeft += e.deltaY * 2.9;
        });
    });
};

// 카드 클릭
const cardOpen = () => {
    const $cards = getAll('.main .card .con-box .slide .slide-item');

    $cards.forEach((card, idx) => {
        card.addEventListener('click', (e) => {
            $cards.forEach((item) => {
                item.classList.remove('active');
                item.querySelector('.desc').classList.remove('active');
            });
            card.classList.add('active');
            card.querySelector('.desc').classList.add('active');
        });
    });
};

// 서비스 슬라이드
const serviceSlide = () => {
    let arr = [
        {
            title: '하트서비스',
            desc: '코웨이만의 특별한 서비스 전문가가 최상의 전용 방문 서비스를 진행합니다',
            imgUrl: '../images/main/main_sbanner_01.jpg',
            url: './page/service/heartService/heartService.html',
        },
        {
            title: '케어서비스',
            desc: '코웨이만의 특별한 실내위생 환경 전문가가 고객님의 건강한 내일을 케어해드립니다',
            imgUrl: '../images/main/main_sbanner_02.jpg',
            url: './page/service/totalCareService/totalCareService.html',
        },
        {
            title: '디지털서비스',
            desc: '코웨이는 평범한 일상 속 생활 환경을 스마트하게 관찰하여 고객님에게 꼭 맞는 솔루션을 제공합니다',
            imgUrl: '../images/main/main_sbanner_03.jpg',
            url: './page/service/iocareService/iocareService.html',
        },
        {
            title: '필터서비스',
            desc: '코웨이는 환경 분석 기술을 기반으로 깨끗하고 안전한 물을 마실 수 있는 서비스를 제공하기 위해 연구합니다',
            imgUrl: '../images/main/main_sbanner_04.jpg',
            url: './page/service/filterService/filterService.html',
        },
    ];

    const $slides = getAll('.main .service-banner .slide .slide-item');
    const $slideBg = get('.main .service-banner .slide .slide-item a');
    const $title = get('.main .service-banner .slide .slide-item h2');
    const $desc = get('.main .service-banner .slide .slide-item p');
    const $paging = getAll('.main .service-banner .paging button');
    let cnt = 0,
        total = arr.length,
        timer = null;

    const banner = () => {
        $title.textContent = arr[cnt].title;
        $desc.textContent = arr[cnt].desc;
        $slideBg.style.setProperty('--background-image', `url(${arr[cnt].imgUrl})`);
        $slideBg.setAttribute('href', `${arr[cnt].url}`);
        // $url.setAttribute('href', `${faqArr[idx].url}`);
        $paging.forEach((item) => {
            item.classList.remove('active');
        });
        $paging[cnt].classList.add('active');
    };

    const sliding = () => {
        cnt = cnt >= total - 1 ? (cnt = 0) : cnt + 1;
        banner();
    };

    timer = setInterval(sliding, 3000);

    $paging.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            clearInterval(timer);
            cnt = idx;
            banner();
            timer = setInterval(sliding, 3000);
        });
    });
};

const topBtnScroll = () => {
    const $topBtn = get('.main .top-btn');
    let sy = 0;
    window.addEventListener('scroll', (e) => {
        sy = window.scrollY;

        if (sy > 600) {
            $topBtn.classList.add('active');
            $topBtn.addEventListener('click', (e) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        } else {
            $topBtn.classList.remove('active');
        }
        if (sy > 4450) {
            $topBtn.style.bottom = '320px';
        } else {
            $topBtn.style.bottom = '40px';
        }
    });
};

// 합치기
const mainInit = () => {
    visualSlide();
    productTab();
    recommend();
    cardOpen();
    serviceSlide();
    topBtnScroll();
};

// 실행
(() => {
    mainInit();
})();
