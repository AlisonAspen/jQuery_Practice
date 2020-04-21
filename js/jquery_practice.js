$(".one").click(function(){
     $(".one").animate({
          height: '150px',
          opacity: '0.5',
          left: '100px'
     });
});
//box two to activate css animations of hidden elements
$(".two").click(function(){
     $(".two").toggleClass("active");
});

$(".three").hover(function(){
     $(".one").css({
          "background-color": "#4a47a3",
          "height": "50px",
          "width": "50px",
     });
     $(".three").css({
          "background-color": "#4a47a3",
          "height": "50px",
          "width": "50px",
     });

});

$(".three").mouseleave(function(){
     $(".one").css({
          "background-color": "blue",
          "height": "100px",
          "width": "100px",
     });
     $(".three").css({
          "background-color": "blue",
          "height": "100px",
          "width": "100px",
     });
});

$(".four").click(function(){
     $(".two").fadeTo(2000, 0.5);
});

$(".five").click(function(){
     $(".static").slideToggle();
});
