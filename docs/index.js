import knightMoves from "./js/knightMoves.js"
const sleep = ms => new Promise(r => setTimeout(r, ms));
let start = '[0,0]'
let end = null

function disableClickOnBoxes() {
  const boxes = document.getElementById('container').children
  for (const box of boxes) {
    box.style.pointerEvents = 'none'
  }
}

function enableClickOnBoxes() {
  const boxes = document.getElementById('container').children
  for (const box of boxes) {
    box.style.pointerEvents = 'auto'
  }
}

function clearBoard() {
  const boxes = document.getElementById('container').children
  for (const box of boxes) {
    if (box.innerText !== '♞') {
      box.textContent = ""
    }
  }
}

async function handleBoxClick(box) {
  if (box.id === start) return
  clearBoard()
  disableClickOnBoxes()
  end = box.id
  const thePath = knightMoves(JSON.parse(start), JSON.parse(end))
  let pathElements = []
  thePath.forEach((location) => {
    const box = document.getElementById(JSON.stringify(location))
    pathElements.push(box)

  })
  for (let i = 0; i < pathElements.length; i++) {
    const element = pathElements[i]
    if (i !== 0) {
      element.textContent = i
    }

    element.style.backgroundColor = 'lightgreen'
    await sleep(200)
    element.style.backgroundColor = ''
    await sleep(200)
    element.style.backgroundColor = 'lightgreen'
    await sleep(200)
    element.style.backgroundColor = ''

    if (i === pathElements.length - 1) {
      element.innerText = '♞'
      start = element.id
      pathElements[0].textContent = 0
    }


  }

  enableClickOnBoxes()
}

function initBoard() {
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      const box = document.createElement('div')
      if ((i % 2 !== 0 && j % 2 === 0) || (i % 2 === 0 && j % 2 !== 0)) {
  
        box.className = 'box shaded'
      } else {
        box.className = 'box'
  
      }
      box.id = `[${i},${j}]`
      box.addEventListener('click', () => handleBoxClick(box))
      document.getElementById('container').appendChild(box)
    }
  }
  
  document.getElementById("[0,0]").innerText = "♞"
}

document.addEventListener('DOMContentLoaded', initBoard)