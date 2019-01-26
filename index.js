// Move the mouse across the screen as a sine wave.
const express = require("express");
const app = express()
const robot = require("robotjs");

app.get('/', (req, res) => {
  let {x,y} = req.query
  if(x == null || y == null) {return}

  robot.moveMouse(x, y);
  robot.mouseClick();
  console.log('click',{x,y})
  res.send(`click x:${x} y:${y}\n`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
