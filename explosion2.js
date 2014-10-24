(function() {
  window.onload = function() {
    var Point, canvas, ctx, disze, drawCircle, dx, dy, point, update;
    canvas = document.getElementById("field");
    ctx = canvas.getContext('2d');
    Point = (function() {
      function Point(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
      }

      return Point;

    })();
    point = new Point(canvas.width / 2, canvas.height / 2, 20);
    dx = 3;
    dy = 3;
    disze = 1.04;
    drawCircle = function(pt) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2, true);
      return ctx.fill();
    };
    update = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      console.log("update");
      drawCircle(point);
      point.x += dx;
      point.y += dy;
      point.size *= disze;
      return window.requestAnimationFrame(update);
    };
    return window.requestAnimationFrame(update);
  };

}).call(this);
