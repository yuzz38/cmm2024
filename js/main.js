// tabs
$('.tabs__button > a').click( function(e) {
    e.preventDefault();
    $('.tabs__button > a').removeClass('active');
    $(this).addClass('active');
    $('.tabs__body').removeClass('active');
    $($(this).attr('href')).addClass('active');
   });
   // cookies
   if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-container").removeClass('hidden');
}
   $('.learn-more').on('click',function(e){
       e.preventDefault();
   document.cookie = "accepted_cookies=yes;"
   if (document.cookie = "accepted_cookies=yes;") {
    $(".cookie-container").addClass('hidden');
}

})
$('.cookie__registration').on('click',function(e){
  e.preventDefault();
document.cookie = "accepted_cookies=yes;"
if (document.cookie = "accepted_cookies=yes;") {
$(".cookie-container").addClass('hidden');
}

})
const hamburg = document.querySelector(".hj");
hamburg.addEventListener("click", () => {
   hamburg.classList.toggle('open');
});

// burger 
$('.header__burger').click(function(e){
    e.preventDefault();
    $('.header__nav').toggleClass('active');
  })
  $('.header__close').click(function(e){
    e.preventDefault();
    $('.header__nav').toggleClass('active');
  })
// header on scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var headerr = $('header');
    if (scroll >= 600) {
      $(".cookie-container").addClass("showing");
  }
     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $("header").addClass("hedscroll");
    }
    else if (headerr.hasClass('policy')){
      $("header").addClass("hedscroll");
    }
    else {
      $("header").removeClass("hedscroll");
      $(".cookie-container").removeClass("showing");
    }
}); 
$(document).on('click', '.achor', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
// default swiper   
const expertswiper = new Swiper('.expertswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
  spaceBetween: 24,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
      // Navigation arrows
      
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1040: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  },
  });
// button top to body   
$(document).on("click","#spnTop",function(){
    $('html,body').animate({scrollTop: 0}, 500);
  
  });
// custom select    
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}