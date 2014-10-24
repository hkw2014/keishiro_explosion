window.onload = ->
  canvas = document.getElementById "field"
  ctx = canvas.getContext '2d'

  acc = 27

  class Point
    constructor : (x, y, size) ->
      @x = x
      @y = y
      @size = size

    update: (dx, dy, dsize) ->
      @x += dx
      @y += dy
      @size -= dsize

  getRan = () -> (Math.random() - 0.5)*2

  nPoint = 1000
  points = (new Point(canvas.width/2, canvas.height/2, 6) for i in [0..nPoint])
  dpoints = ({dx:getRan(), dy:getRan(), dsize:0.001} for i in [0..nPoint])

  drawCircle = (pt, col) ->
    ctx.beginPath()
    ctx.fillStyle = col
    ctx.arc pt.x, pt.y, pt.size, 0, Math.PI * 2, true
        
    ctx.fill()

  update = ->
    ctx.clearRect 0, 0, canvas.width, canvas.height


    j=0
    for i in points
      drawCircle(i, if j<500 then "yellow" else "red" )
      j++


    for i in [0..nPoint]
      d = dpoints[i]
      points[i].update(d.dx*acc, d.dy*acc, 0.01#d.dsize*acc)
      )

    acc -= 0.4

    window.requestAnimationFrame update

  window.requestAnimationFrame update