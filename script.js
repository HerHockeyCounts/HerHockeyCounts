/* ---------------------------------------------
 Height 100%
 --------------------------------------------- */
function js_height_init() {
    (function($){
        $(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
            $(this).height($(this).parent().first().height());
        });
    })(jQuery);
}

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// 
// 1
tabSlide1();

$('.nav-tabs li').on('shown.bs.tab', function() {
  $('#magic-line').remove();
  tabSlide1();
});

function tabSlide1() {
  $("#example-one").append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");
  $magicLine
    .width($(".active").width())
    .css("left", $(".active a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());
  $("#example-one li").find("a").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $magicLine.stop().animate({
      left: $magicLine.data("origLeft"),
      width: $magicLine.data("origWidth")
    });
  });

}

// 
// 2
tabSlide2();

$('.nav-tabs li').on('shown.bs.tab', function() {
  $('#magic-line2').remove();
  tabSlide2();
});

function tabSlide2() {
  $("#example-two").append("<li id='magic-line2'></li>");
  var $magicLine = $("#magic-line2");
  $magicLine
    .width($(".active2").width())
    .css("left", $(".active a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());
  $("#example-two li").find("a").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $magicLine.stop().animate({
      left: $magicLine.data("origLeft"),
      width: $magicLine.data("origWidth")
    });
  });

}

// 
// 3
tabSlide3();

$('.nav-tabs li').on('shown.bs.tab', function() {
  $('#magic-line3').remove();
  tabSlide3();
});

function tabSlide3() {
  $("#example-three").append("<li id='magic-line3'></li>");
  var $magicLine = $("#magic-line3");
  $magicLine
    .width($(".active3").width())
    .css("left", $(".active3 a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());
  $("#example-three li").find("a").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $magicLine.stop().animate({
      left: $magicLine.data("origLeft"),
      width: $magicLine.data("origWidth")
    });
  });

}


// 
// 4
tabSlide4();

$('.nav-tabs li').on('shown.bs.tab', function() {
  $('#magic-line4').remove();
  tabSlide4();
});

function tabSlide4() {
  $("#example-four").append("<li id='magic-line4'></li>");
  var $magicLine = $("#magic-line4");
  $magicLine
    .width($(".active4").width())
    .css("left", $(".active4 a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());
  $("#example-four li").find("a").hover(function() {
    $el = $(this);
    leftPos = $el.position().left;
    newWidth = $el.parent().width();
    $magicLine.stop().animate({
      left: leftPos,
      width: newWidth
    });
  }, function() {
    $magicLine.stop().animate({
      left: $magicLine.data("origLeft"),
      width: $magicLine.data("origWidth")
    });
  });

}


// 
function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);
