document.addEventListener("DOMContentLoaded",function(){
    // ========SCROLL KHAI BÁO========= //
        var menu = document.querySelector('.navmenu')
        var mobile = document.querySelector('.navMobile')
        var close = document.querySelector('.nav_closeX');
        var navbar = document.querySelector('header');
    
    // ========SEARCH KHAI BÁO========= //
        var search = document.getElementById('menu-search');
        var nav_search = document.querySelector('.nav_search');
        var close_search = document.getElementById('close_search');
    
    // ========SCROLL========= //
    window.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > 100){
            view.classList.add('viewon')
        }else if(window.pageYOffset < 100 ){
            view.classList.remove('viewon')
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
        if (document.documentElement.scrollTop > 180) {
            navbar.style.backgroundColor = 'white';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    };
    // ========END SCROLL NAVBER========= //
    },false)