window.onscroll = function () {
    scrollFunction();

};
function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (oldValue > newValue) {
        // console.log('scroll top?')
        document.querySelector('.header').classList.add('sticked');
        if (window.pageYOffset <= 30) {
            document.querySelector('.header').classList.remove('sticked');

        } else {

        }
    } else if (window.pageYOffset <= 30) {
        document.querySelector('.header').classList.remove('sticked');
    } else {
        document.querySelector('.header').classList.add('sticked');

    }


    oldValue = newValue;
}

let oldValue = 0;
let newValue = 0;

function scrollFunction() {
    checkScrollDir();


}

document.onload = () => {
    scrollFunction();
};


window.addEventListener('load', function () {
    const languageItems = document.querySelectorAll('.dropdown-language li');
    const selectedLanguage = document.querySelector('#selected-value')
    const languageList = document.querySelector('#language-list')
    const dropdownLanguage = document.querySelector('.dropdown-language');

    dropdownLanguage.addEventListener('click', function (e) {
        this.classList.toggle('active');
    })

    languageItems.forEach(elem => {
        elem.addEventListener('click', function () {
            languageList.classList.remove('active');
            selectedLanguage.innerHTML = elem.innerHTML
        })

        if (elem.dataset.selected === 'selected') {
            selectedLanguage.innerHTML = elem.innerHTML
        }
    })

    if (document.querySelector('.seo__wrapper')) {
        const seoArticle = document.querySelector('.seo__wrapper');
        const toggleArticle = document.querySelector('.toggle__article');

        toggleArticle.addEventListener('click', function () {
            seoArticle.classList.toggle('active');
            toggleArticle.classList.toggle('open')
        });
    }

    function showTab(elem) {
        const tabsLink = document.querySelectorAll(`.tabs__link[data-name=${elem.dataset.name}]`);
        const tabsPane = document.querySelectorAll(`.tabs__pane[data-name=${elem.dataset.name}]`);

        const id = elem.getAttribute('href').replace('#', '');

        tabsLink.forEach(elem => elem.classList.remove('tabs__link__active'));
        tabsPane.forEach(elem => elem.classList.remove('tabs__pane_show'));

        elem.classList.add('tabs__link__active')
        document.getElementById(id).classList.add('tabs__pane_show')
    }

    if (document.querySelectorAll('.tabs__link')) {
        const tabsLink = document.querySelectorAll('.tabs__link');

        tabsLink.forEach(item => item.addEventListener('click', (e) => {
            e.preventDefault();
            showTab(item);
        }))

    }

    if (document.querySelector('.faq__list')) {
        const faqList = document.querySelector('.faq__list');
        const faqItem = document.querySelectorAll('.faq__list .list__item');

        faqList.addEventListener('click', function (e) {
            if (e.target.tagName === 'DIV') {

                if (!e.target.parentElement.classList.contains('list__item__active')) {
                    faqItem.forEach(elem => {
                        if (elem.classList.contains('list__item__active')) {
                            console.log('dasda')
                            elem.classList.remove('list__item__active')
                        }
                    })
                    e.target.parentElement.classList.add('list__item__active')
                } else {
                    e.target.parentElement.classList.remove('list__item__active')
                }
            }
        })
    }

    if (document.querySelector('.inputfile')) {
        const inputFile = document.querySelector('.inputfile input');

        let inputTitle = document.querySelector('.inputfile .title')

        inputFile.addEventListener('change', function () {
            if (this.files && this.files.length > 0) {
                inputTitle.innerHTML = this.files[0].name
            }
        })
    }

    const burger = document.querySelector('.header__burger');
    const headerBackground = document.querySelector('.header__background');

    burger.addEventListener('click', toggleBurger);
    headerBackground.addEventListener('click', function (e) {
        e.stopPropagation();
        headerBackground.classList.remove('header__background--show');
        burger.classList.remove('header__burger--show');
    })

    function toggleBurger() {
        burger.classList.toggle('header__burger--show');
        if (burger.classList.contains('header__burger--show')) {
            headerBackground.classList.add('header__background--show');
            document.querySelector('body').style.overflow = 'hidden';
        } else {
            headerBackground.classList.remove('header__background--show');
            document.querySelector('body').style.overflow = 'auto';
        }
    }


})

const partnerSwiper = new Swiper('.partner-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.partner-slider .custom-pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.partner-slider .swiper-button-next',
        prevEl: '.partner-slider .swiper-button-prev',
    },

    // And if we need scrollbar
}).mount()

const casesSwiper = new Swiper('.cases-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.cases-slider .custom-pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.cases-slider .swiper-button-next',
        prevEl: '.cases-slider .swiper-button-prev',
    },

}).mount()

const dealsSwiper = new Swiper('.deals-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.deals-slider .custom-pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.deals-slider .swiper-button-next',
        prevEl: '.deals-slider .swiper-button-prev',
    },

}).mount()

