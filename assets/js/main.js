window.addEventListener('load', function () {
    const languageItems = document.querySelectorAll('.dropdown-language li');
    const selectedLanguage = document.querySelector('#selected-value')
    const languageList = document.querySelector('#language-list')

    languageItems.forEach(elem => {
        elem.addEventListener('click', function () {
            languageList.classList.remove('active');
            selectedLanguage.innerHTML = elem.innerHTML
        })

        if (elem.dataset.selected === 'selected') {
            selectedLanguage.innerHTML = elem.innerHTML
        }
    })

    selectedLanguage.addEventListener('click', function (elem) {
        languageList.classList.toggle('active');
    })

    if (document.querySelector('.seo__wrapper')) {
        const seoArticle = document.querySelector('.seo__wrapper');
        const toggleArticle = document.querySelector('.toggle__article');

        toggleArticle.addEventListener('click', function () {
            seoArticle.classList.toggle('active');
            toggleArticle.classList.toggle('open')
        });
    }

    if (document.querySelectorAll('.tabs__link')) {
        const tabLinks = document.querySelectorAll('.tabs__link');
        const tabPanes = document.querySelectorAll('.tabs__pane');

        tabLinks.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault()

                const id = e.currentTarget.getAttribute('href').replace('#', '')

                tabLinks.forEach(item => item.classList.remove('tabs__link__active'))
                tabPanes.forEach(item => item.classList.remove('tabs__pane_show'))

                item.classList.add('tabs__link__active');
                document.getElementById(id).classList.add('tabs__pane_show')
            })
        })
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

})

const businessSwiper = new Swiper('.cooperation-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.cooperation-slider .custom-pagination',
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '0' + (index + 1) + '</span>';
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.cooperation-slider .swiper-button-next',
        prevEl: '.cooperation-slider .swiper-button-prev',
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

