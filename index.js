// Move the mouse across the screen as a sine wave.
const express = require("express");
const app = express()
const robot = require("robotjs");

app.get('/:x/:y', (req, res) => {
  let {x,y} = req.params
  if(x == null || y == null) {return}

//  let x_zoom = x * 1920 / 300
//  let y_zoom = y * 1080 / 200
  let zoom = 768  / 1000
  let x_zoom = x * zoom
  let y_zoom = y * zoom
  robot.moveMouse(x_zoom, y_zoom);
  robot.mouseClick();
  console.log('click',{x,y})
  res.send(`click x:${x} y:${y}\n`)
})

app.listen(5000, () => console.log('Example app listening on port 5000!'))
