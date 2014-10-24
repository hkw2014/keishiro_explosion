(function() {
  window.onload = function() {
    var Point, acc, canvas, ctx, dpoints, drawCircle, getRan, i, nPoint, points, update;
    canvas = document.getElementById("field");
    ctx = canvas.getContext('2d');
    acc = 27;
    Point = (function() {
      function Point(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
      }

      Point.prototype.update = function(dx, dy, dsize) {
        this.x += dx;
        this.y += dy;
        return this.size -= dsize;
      };

      return Point;

    })();
    getRan = function() {
      return (Math.random() - 0.5) * 2;
    };
    nPoint = 1000;
    points = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= nPoint ? _i <= nPoint : _i >= nPoint; i = 0 <= nPoint ? ++_i : --_i) {
        _results.push(new Point(canvas.width / 2, canvas.height / 2, 6));
      }
      return _results;
    })();
    dpoints = (function() {
      var _i, _results;
      _results = [];
      for (i = _i = 0; 0 <= nPoint ? _i <= nPoint : _i >= nPoint; i = 0 <= nPoint ? ++_i : --_i) {
        _results.push({
          dx: getRan(),
          dy: getRan(),
          dsize: 0.001
        });
      }
      return _results;
    })();
    drawCircle = function(pt, col) {
      ctx.beginPath();
      ctx.fillStyle = col;
      ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2, true);
      return ctx.fill();
    };
    update = function() {
      var d, j, _i, _j, _len;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      j = 0;
      for (_i = 0, _len = points.length; _i < _len; _i++) {
        i = points[_i];
        drawCircle(i, j < 500 ? "yellow" : "red");
        j++;
      }
      for (i = _j = 0; 0 <= nPoint ? _j <= nPoint : _j >= nPoint; i = 0 <= nPoint ? ++_j : --_j) {
        d = dpoints[i];
        points[i].update(d.dx * acc, d.dy * acc, 0.01);
      }
      acc -= 0.4;
      return window.requestAnimationFrame(update);
    };
    return window.requestAnimationFrame(update);
  };

}).call(this);
