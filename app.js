const board = document.querySelector('#board')
const colors = ['#FF69B4', '#20B2AA', '#00FA9A', '#DC143C', '#FFFF00', '#9370DB', '#BC8F8F', '#ADFF2F', '#FF1493', '#4B0082']
const SQUARES_NUMBER = 714

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  let k = i + 4
  let j = i - 2
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
  if (j == 17 || j == 18 || j == 19 || j == 20
     || j == 68 || j == 69 || j == 70 || j == 71
     || j == 119 || j == 120 || j == 121 || j == 122
     || j == 170 || j == 171 || j == 172 || j == 173
     || j == 221 || j == 222 || j == 223 || j == 224
     || j == 272 || j == 273 || j == 274 || j == 275
     || j == 323 || j == 324 || j == 325 || j == 326
     || j == 374 || j == 375 || j == 376 || j == 377
     || j == 425 || j == 426 || j == 427 || j == 428
     || j == 469 || j == 470 || j == 471 || j == 472 || j == 476 || j == 477 || j == 478 || j == 479
     || j == 521 || j == 522 || j == 523 || j == 524 || j == 527 || j == 528 || j == 529 || j == 530
     || j == 572 || j == 573 || j == 574 || j == 575 || j == 576 || j == 578 || j == 579 || j == 580 || j == 581
     || j == 624 || j == 625 || j == 626 || j == 627 || j == 629 || j == 630 || j == 631 
     || j == 677 || j == 678 || j == 680 || j == 681 ) {
      setColor(square)
  }
  if (k == 34 || k == 35 || k == 37 || k == 38 || k == 39
    || k == 83 || k == 84 || k == 85 || k == 86 || k == 88 || k == 89 || k == 90 || k == 91
    || k == 133 || k == 134 || k == 135 || k == 136 || k == 139 || k == 140 || k == 141 || k == 142 || k == 143
    || k == 184 || k == 185 || k == 186 || k == 191 || k == 192 || k == 193 || k == 194
    || k == 235 || k == 236 || k == 237 || k == 238 || k == 239
    || k == 286 || k == 287 || k == 288 || k == 289 || k == 290 || k == 292 || k == 293 || k == 294 || k == 295
    || k == 338 || k == 339 || k == 340 || k == 341 || k == 343 || k == 344 || k == 345 || k == 346 || k == 347
    || k == 391 || k == 392 || k == 394 || k == 395 || k == 396 || k == 397 || k == 398 || k == 399
    || k == 446 || k == 447 || k == 448 || k == 449 || k == 450
    || k == 489 || k == 490 || k == 491 || k == 492 || k == 498 || k == 499 || k == 500 || k == 501
    || k == 540 || k == 541 || k == 542 || k == 543 || k == 544 || k == 548 || k == 549 || k == 550 || k == 551 || k == 552
    || k == 592 || k == 593 || k == 594 || k == 595 || k == 596 || k == 598 || k == 599 || k == 600 || k == 601 || k == 602
    || k == 644 || k == 645 || k == 646 || k == 647 || k == 649 || k == 650 || k == 651 || k == 652
    || k == 697 || k == 698 || k == 700 || k == 701 || k == 702) {
      setColor(square)
  }
}

// так так так так всего 51. j - 11 s - 13

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor()  {
  return colors[Math.floor(Math.random() * colors.length)]
}