document.addEventListener("DOMContentLoaded",function(){
// ========SLIDE KHAI BÁO========= //
    var slider = document.querySelectorAll(".slide_container ul li");
    var sliderDots = document.querySelectorAll(".slider-dot-item");
    var prev = document.querySelector(".pev_slide");
    var next = document.querySelector(".next_slide");
    var slideBackground = document.querySelector(".sl_overlay");
    var navbar = document.querySelector('header');
    var index = 0; //chiSoHienTai
    var lengthSlide = slider.length; // soLuongSlide
// ========SCROLL KHAI BÁO========= //
    var menu = document.querySelector('.navmenu')
    var mobile = document.querySelector('.navMobile')
    var close = document.querySelector('.nav_closeX');

// ========SEARCH KHAI BÁO========= //
    var search = document.getElementById('menu-search');
    var nav_search = document.querySelector('.nav_search');
    var close_search = document.getElementById('close_search');
// ========SLIDE========= //
    
    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].addEventListener('click',function(){
            for (let i = 0; i < sliderDots.length; i++) {
                sliderDots[i].classList.remove('active');                
            }
                this.classList.add('active');

                var nutkichhoat = this;
                var vitriSlide = 0;
                for (vitriSlide = 0; nutkichhoat = nutkichhoat.previousElementSibling ; vitriSlide++){}
                for (let i = 0; i < slider.length; i++) {
                    slider[i].classList.remove('active_slide');
                    slider[vitriSlide].classList.add('active_slide');
                    
                }
        })
        
        }
    
    var slideNavigationNext = function(){
        console.log("next slide");
        var phanTuHienTai = slider[index];
        if(index < lengthSlide -1){
            index = index +1;
        }else{
            index = 0
        }
        var phanThuTiepTheo = slider[index];
        var xuLyHienTaiKetThucCD = function(){
            this.classList.remove('slides');
            this.classList.remove('outSlide');
        }
        var xuLyTiepTheoKetThucCD = function(){
            this.classList.remove('inSlide');
            this.classList.add('slides');
        }
        phanThuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
        phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
        

        phanThuTiepTheo.classList.add('inSlide');
        phanTuHienTai.classList.add('outSlide');
    }
    next.addEventListener("click",slideNavigationNext);
    var slideNavigationPrev = function(){
        console.log("slide prev");
        var phanTuHienTai = slider[index];
        if(index > 0 ){
            index-- ;
        }else{
            index = lengthSlide - 1
        }
        var phanThuTiepTheo = slider[index];
        var xuLyHienTaiKetThucCD = function(){
            this.classList.remove('slides');
            this.classList.remove('outSlide');
        }
        var xuLyTiepTheoKetThucCD = function(){
            this.classList.remove('inSlide');
            this.classList.add('slides');
        }
        phanThuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD);
        phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD);
        
        
        phanThuTiepTheo.classList.add('inSlide');
        phanTuHienTai.classList.add('outSlide');
    }
    prev.addEventListener("click",slideNavigationPrev);
// ========END SLIDE========= //
// ========SCROLL========= //
window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset > 100){
        view.classList.add('viewon')
        slideBackground.classList.add('overlay')
        if(window.pageYOffset > 220 ){
            slideBackground.classList.add('overlay1')
        }else if(window.pageYOffset < 220){
            slideBackground.classList.remove('overlay1')
        } if(window.pageYOffset > 280){
            slideBackground.classList.add('overlay2')
        }else if(window.pageYOffset < 280){
            slideBackground.classList.remove('overlay2')
        }
    }else if(window.pageYOffset < 100 ){
        view.classList.remove('viewon')
        slideBackground.classList.remove('overlay')
    }
})
var view = document.querySelector('.scroll_title');
    view.onclick = function(){
        window.scrollTo({top:0, behavior: 'smooth'});
    }

// ========END SCROLL========= //
    menu.onclick = function(){
        mobile.classList.add('menu-Right-Mobile');
        mobile.classList.remove('menu-out');
    }
    close.onclick = function(){
        mobile.classList.remove('menu-Right-Mobile');
        mobile.classList.add('menu-out');
    }
// ========END SEARCH========= //
    search.onclick = function(){
        nav_search.classList.add('open-search')
    }
    close_search.onclick = function(){
        nav_search.classList.remove('open-search')
    }
// ========END SEARCH========= //
// ========SCROLL NAVBER========= //
window.onscroll = function() {
    // Thay đổi màu nền của navbar khi cuộn trang
    if (document.documentElement.scrollTop > 880) {
        navbar.style.backgroundColor = 'white';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
};
// ========END SCROLL NAVBER========= //
},false)