jQuery(document).ready(function ($) {
  // CURSOR
  var cursor = $('.cursor'),
    follower = $('.cursor-follower'),
    heart = $('.heart'),
    body = $('body');

  var posX = 0,
    posY = 0;

  var mouseX = 0,
    mouseY = 0;

  TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
      posX += (mouseX - posX) / 9;
      posY += (mouseY - posY) / 9;

      TweenMax.set(follower, {
        css: {
          left: posX - 12,
          top: posY - 12
        }
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY
        }
      });
    }
  });

  $(document).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  // yellow circle
  heart.on('mouseenter', function () {
    cursor.addClass('red');
    follower.addClass('red');
  });
  heart.on('mouseleave', function () {
    cursor.removeClass('red');
    follower.removeClass('red');
  });
  // yellow circle
  heart.on('click', function () {
    body.addClass('clicked');
  });
});
