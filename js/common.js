// 공통으로 한번. common.js
const get = (target) => document.querySelector(target);
const getAll = (target) => document.querySelectorAll(target);

const preventDefaultAnchor = () => {
    const $links = getAll('a[href="#"]');
    $links.forEach((link) => {
        link.addEventListener('click', (e) => e.preventDefault());
    });
};

// 공통으로 들어가는 내용을 성격별로 함수로 만들기
// header
const gnbMenu = () => {
    const $header = get('#header');
    const $gnbWrap = get('#header .nav .gnb-wrap');
    const $gnbLis = getAll('#header .nav .gnb-wrap .gnb .gnb-li');
    const $lnbs = getAll('#header .nav .gnb .gnb-li .lnb');

    let h = parseInt(getComputedStyle($header).height, 10);
    let arrH = [];

    $gnbLis.forEach((li, idx) => {
        arrH.push($lnbs[idx].offsetHeight);

        li.addEventListener('mouseenter', () => {
            $gnbLis.forEach((liItem) => {
                liItem.classList.remove('on');
            });
            $lnbs.forEach((lnbItem) => {
                lnbItem.classList.remove('on');
            });
            $header.classList.remove('off');

            li.classList.add('on');
            $lnbs[idx].classList.add('on');
            $header.classList.add('on');

            $header.style.height = `${h + arrH[idx] + 76}px`;
            $gnbWrap.style.height = `${h + arrH[idx] + 76}px`;
        });
    });

    $gnbWrap.addEventListener('mouseleave', () => {
        $gnbLis.forEach((liItem) => {
            liItem.classList.remove('on');
        });
        $lnbs.forEach((lnbItem) => {
            lnbItem.classList.remove('on');
        });
        $header.classList.remove('on');

        $header.classList.add('off');

        $header.style.height = `${h}px`;
        $gnbWrap.style.height = `${h}px`;
    });
};
const loginPop = () => {
    const $pop = get('#header .login-pop');
    const $login = get('#header .nav .right-menu ul li.login');
    let timer = null;

    $login.addEventListener('mouseenter', (e) => {
        $pop.classList.add('active');
        const open = () => {
            const wh = $login.getBoundingClientRect();

            $pop.style.top = `${wh.bottom}px`;
            $pop.style.left = `${wh.left}px`;
        };
        timer = setInterval(open, 10);
    });
    $login.addEventListener('mouseleave', (e) => {
        $pop.classList.remove('active');
        clearInterval(timer);
    });
    $pop.addEventListener('mouseenter', (e) => {
        $pop.classList.add('active');
        const open = () => {
            const wh = $login.getBoundingClientRect();

            $pop.style.top = `${wh.bottom}px`;
            $pop.style.left = `${wh.left}px`;
        };
        timer = setInterval(open, 10);
    });
    $pop.addEventListener('mouseleave', (e) => {
        $pop.classList.remove('active');
        clearInterval(timer);
    });
};
const myPagePop = () => {
    const $pop = get('#header .my-pop');
    const $myPage = get('#header .nav .right-menu ul li.mypage');

    $myPage.addEventListener('mouseenter', (e) => {
        $pop.classList.add('active');
        const open = () => {
            const wh = $myPage.getBoundingClientRect();

            $pop.style.top = `${wh.bottom}px`;
            $pop.style.left = `${wh.left}px`;
        };
        timer = setInterval(open, 10);
    });
    $myPage.addEventListener('mouseleave', (e) => {
        $pop.classList.remove('active');
        clearInterval(timer);
    });
    $pop.addEventListener('mouseenter', (e) => {
        $pop.classList.add('active');
        const open = () => {
            const wh = $myPage.getBoundingClientRect();

            $pop.style.top = `${wh.bottom}px`;
            $pop.style.left = `${wh.left}px`;
        };
        timer = setInterval(open, 10);
    });
    $pop.addEventListener('mouseleave', (e) => {
        $pop.classList.remove('active');
        clearInterval(timer);
    });
};
const globalPop = () => {
    const $pop = get('#header .global-pop');
    const $global = get('#header .nav .right-menu ul .global');
    const $btnClose = get('#header .global-pop .global-pop-tit .pop-close');
    let timer = null;

    $global.addEventListener('click', (e) => {
        if ($global.classList.contains('active')) {
            $pop.classList.remove('active');
            $global.classList.remove('active');
            clearInterval(timer);
            console.log(1);
        } else {
            $global.classList.add('active');
            $pop.classList.add('active');
            const open = () => {
                const wh = $global.getBoundingClientRect();

                $pop.style.top = `${wh.bottom + 10}px`;
                $pop.style.left = `${wh.left - 260}px`;
            };
            timer = setInterval(open, 10);
        }
    });
    $btnClose.addEventListener('click', (e) => {
        $pop.classList.remove('active');
        $global.classList.remove('active');
        clearInterval(timer);
    });
};

// footer
const familySite = () => {
    const $fam = get('#footer .top .family p');
    const $famUl = get('#footer .top .family ul');
    const $famIcon = get('#footer .top .family p i');

    $fam.addEventListener('click', (e) => {
        $fam.classList.toggle('on');
        $famUl.classList.toggle('on');

        if ($famIcon.classList.contains('xi-angle-down')) {
            $famIcon.classList.remove('xi-angle-down');
            $famIcon.classList.add('xi-angle-up');
        } else {
            $famIcon.classList.remove('xi-angle-up');
            $famIcon.classList.add('xi-angle-down');
        }
    });
};

// footer popup
const popup = () => {
    const $popBg = get('#footer .pop-bg');
    const $tabs = getAll('#footer .top-pop-01 .top-pop-tab li');
    const $descs = getAll('#footer .top-pop .top-pop-wrap li');

    const $open01 = get('#footer .top .top-menu li .open-01');
    const $open02 = get('#footer .top .top-menu li .open-02');
    const $open03 = get('#footer .top .top-menu li .open-03');

    const $pop01 = get('#footer .top-pop-01');
    const $pop02 = get('#footer .top-pop-02');
    const $pop03 = get('#footer .top-pop-03');

    const $pop01BtnClose01 = get('#footer .top-pop-01 .pop-close');
    const $pop01BtnClose02 = getAll('#footer .top-pop-01 .top-pop-desc .pop-close-btn');
    const $pop02BtnClose01 = get('#footer .top-pop-02 .pop-close');
    const $pop02BtnClose02 = get('#footer .top-pop-02 .top-pop-desc .pop-close-btn');
    const $pop03BtnClose01 = get('#footer .top-pop-03 .pop-close');
    const $pop03BtnClose02 = get('#footer .top-pop-03 .top-pop-desc .pop-close-btn');

    $open01.addEventListener('click', (e) => {
        $popBg.classList.add('active');
        $pop01.classList.add('active');
        e.preventDefault();
    });
    $open02.addEventListener('click', (e) => {
        $popBg.classList.add('active');
        $pop02.classList.add('active');
        e.preventDefault();
    });
    $open03.addEventListener('click', (e) => {
        $popBg.classList.add('active');
        $pop03.classList.add('active');
        e.preventDefault();
    });

    $pop01BtnClose01.addEventListener('click', (e) => {
        $popBg.classList.remove('active');
        $pop01.classList.remove('active');
        $descs.forEach((desc) => {
            desc.classList.remove('active');
        });
        $descs[0].classList.add('active');
        $tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
        $tabs[0].classList.add('active');
    });

    $pop01BtnClose02.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
            $popBg.classList.remove('active');
            $pop01.classList.remove('active');
            $descs.forEach((desc) => {
                desc.classList.remove('active');
            });
            $descs[0].classList.add('active');
            $tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            $tabs[0].classList.add('active');
            e.preventDefault();
        });
    });

    $pop02BtnClose01.addEventListener('click', (e) => {
        $popBg.classList.remove('active');
        $pop02.classList.remove('active');
    });
    $pop02BtnClose02.addEventListener('click', (e) => {
        $popBg.classList.remove('active');
        $pop02.classList.remove('active');
        e.preventDefault();
    });
    $pop03BtnClose01.addEventListener('click', (e) => {
        $popBg.classList.remove('active');
        $pop03.classList.remove('active');
    });
    $pop03BtnClose02.addEventListener('click', (e) => {
        $popBg.classList.remove('active');
        $pop03.classList.remove('active');
        e.preventDefault();
    });

    $tabs.forEach((item, idx) => {
        item.addEventListener('click', (e) => {
            $descs.forEach((desc) => {
                desc.classList.remove('active');
            });
            $tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            $descs[idx].classList.add('active');
            item.classList.add('active');
        });
    });
};

// 합치기
const comInit = () => {
    const getPage = (page, tag) => {
        fetch(page)
            .then((res) => res.text())
            .then((res) => {
                if (tag === '#header') {
                    get(tag).innerHTML = res;

                    gnbMenu();
                    loginPop();
                    myPagePop();
                    globalPop();
                }
                if (tag === '#footer') {
                    get(tag).innerHTML = res;

                    familySite();
                    popup();
                }
            });
    };
    getPage('/page/header.html', '#header');
    getPage('/page/footer.html', '#footer');
};

// 실행
(() => {
    preventDefaultAnchor();
    comInit();
})();
