'use strict'

function scrollDown($element, speed) {
  //console.log("okay, scrollDown mit element und speed aufgerufen: " + $element + "  : " + speed)
  if (speed <= 0) return;

  var gotoPos = parseInt($element.prop('scrollTop')) + parseInt(speed)
  //console.log("$element.prop('scrollTop'): " + $element.prop('scrollTop') + " gotoPos: " + gotoPos)

  // 2015-07-29
  // using scrollTop() of angular-scroll https://github.com/oblador/angular-scroll
  // because the f* stripped version of jQuery (called jQlite) that angular uses does not have $element.animate()
  // this cost me a lot of time to figure out. I tried everything.. and in the end I used angular-scroll to help out.
  $element.scrollTop(gotoPos);

  setTimeout(function () {
    scrollDown($element, speed)
  }, 180)
}

module.exports = function (app) {
  app.directive('scrollSlowly', function () {

    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        var speed = $attrs.speed
        //console.log("starting scroller directive with speed per tick: " + speed)

        scrollDown($element, speed)
        //$(element).stop().animate({scrollTop: jq("p#5").offset().top}, 30000);
        //$(this).animate({scrollTop:-1*$(this).position().top}, "slow");
        // those were the alternatives with jQuery.

      }
    }
  })
}
