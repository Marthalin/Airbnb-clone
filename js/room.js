// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.booking-1').each( function(i){
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},1200);
//             }
//         }); 
//     });
// });

$(window).scroll(function() {
    if ($(this).scrollTop()>365)
     {
        $('.booking-2').hide(365);
     }
    else
     {
      $('.booking-2').show(365);
     }
 });

// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();
// 	if(wScroll >= 1500){
// 		$("#say02").css("opacity","1");
// 	}

//     if(wScroll >= 350 && wScroll <= 1000){
//         $("#chang").attr("src","img/chang02.png");
//     }else{
//     	$("#chang").attr("src","img/chang.png");
//     }

// 	console.log(wScroll);
// });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 365) {
    document.getElementById("detail-navbar").style.top = "0";
  } else {
    document.getElementById("detail-navbar").style.top = "-50px";
  }
}