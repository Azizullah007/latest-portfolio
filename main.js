
$(document).ready(function () {

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.nav-menu').addClass('sticky');
        } else {
            $('.nav-menu').removeClass('sticky');
        }
    });

    $('.menu-toggler').on('click', function(){
        $(this).toggleClass('open')
        $('.top-nav').toggleClass('open')
    })

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open')
    })

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000)
    })

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0 
        }, 2000)
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});

var typed = new Typed('.typing', {
    strings: ['Software Developer', 'UI/UX Designer.', 'Freelancer.'],
    typeSpeed: 120,
    cursorChar: '_',
    backSpeed: 60,
    loop: true
})

// Protfolio Item Filter
const filterContainer = document.querySelector('.portfolio-filter')
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll('.portfolio-item'),
      totalPortfolioItem = portfolioItems.length

      
      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener('click', function(){
              filterContainer.querySelector('.active').classList.remove('active')
              this.classList.add('active')

              const fliterValue = this.getAttribute('data-filter')
              for(let k=0; k<totalPortfolioItem; k++){
                if(fliterValue ===  portfolioItems[k].getAttribute('data-category')){
                    portfolioItems[k].classList.remove('hide')
                    portfolioItems[k].classList.add('show')
                } else {
                    portfolioItems[k].classList.remove('show')
                    portfolioItems[k].classList.add('hide')
                }
                if(fliterValue === 'all'){
                    portfolioItems[k].classList.remove('hide')
                    portfolioItems[k].classList.add('show')
                }
              }
          })
      }



    //   Protfolio Lightbox

    const lightbox = document.querySelector('.lightbox'),
          lightboxImg = lightbox.querySelector('.lightbox-img'),
          lightboxClose = lightbox.querySelector('.lightbox-close'),
          lightboxText = lightbox.querySelector('.caption-text'),
          lightboxCounter = lightbox.querySelector('.caption-counter')

    let itemIndex = 0;

    for(let i=0; i<totalPortfolioItem; i++){
        portfolioItems[i].addEventListener('click', function(){
            itemIndex = i;
            changeItem();
            // toggleLightbox();
        })
    }

    function nextItem() {
        if(itemIndex === totalPortfolioItem-1){
            itemIndex = 0
        } else {
            itemIndex++
        }
        changeItem()
    }
    function prevItem() {
        if(itemIndex === 0){
            itemIndex = totalPortfolioItem-1
        } else {
            itemIndex--
        }
        changeItem()
    }

    // function toggleLightbox(){
    //     lightbox.classList.toggle('open')
    // }

    function changeItem(){
        imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src')
        lightboxImg.src = imgSrc
        lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML
        lightboxCounter.innerHTML = [itemIndex] + ' of ' + totalPortfolioItem
    };


    // close Lightbox
    lightbox.addEventListener('click', function(event){
        if(event.target === lightboxClose || event.target === lightbox){
            // toggleLightbox()
        }
    })

    /* Block Right click */
    $('.center-container').bind('contextmenu', function(e) {
        return false;
    }); 

    // $('#image-slider-project').bind('contex-tmenu', function(e) {
    //     return false;
    // }); 
