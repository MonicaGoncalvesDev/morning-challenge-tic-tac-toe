// worked in a group with Davida, Khorally & Juan


let globalClickCounter = 0;

const box1 = new Box('#square-1')
const box2 = new Box('#square-2')
const box3 = new Box('#square-3')
const box4 = new Box('#square-4')
const box5 = new Box('#square-5')
const box6 = new Box('#square-6')
const box7 = new Box('#square-7')
const box8 = new Box('#square-8')
const box9 = new Box('#square-9')

let finished = false

function Box(id){
  this.element = document.querySelector(id)
  this.shape = 'none'
  this.displayShape = () => {
    this.element.innerText = this.shape
  }
  this.setShape = () => {
    if (finished === false) {
      if (this.shape === 'none'){
        this.shape =  globalClickCounter % 2 ? 'X' : 'O'
        globalClickCounter++
        this.displayShape()
      }
      // first row win
      if (box1.shape === 'O' && box2.shape === 'O' && box3.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box1.shape === 'X' && box2.shape === 'X' && box3.shape === 'X'){
        finished = true
        document.querySelector('span').innerText = "X Wins"
      }else if (box4.shape === 'O' && box5.shape === 'O' && box6.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box4.shape === 'X' && box5.shape === 'X' && box6.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
      }else if (box7.shape === 'O' && box8.shape === 'O' && box9.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box7.shape === 'X' && box8.shape === 'X' && box9.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true
      }else if (box1.shape === 'O' && box4.shape === 'O' && box7.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box1.shape === 'X' && box4.shape === 'X' && box7.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true
      }else if (box2.shape === 'O' && box5.shape === 'O' && box8.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box2.shape === 'X' && box5.shape === 'X' && box8.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true
      }else if (box3.shape === 'O' && box6.shape === 'O' && box9.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box3.shape === 'X' && box6.shape === 'X' && box9.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true
      }else if (box1.shape === 'O' && box5.shape === 'O' && box9.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box1.shape === 'X' && box5.shape === 'X' && box9.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true
      }else if (box3.shape === 'O' && box5.shape === 'O' && box7.shape === 'O'){
        finished = true
        document.querySelector('span').innerText = "O Wins"
      }else if (box3.shape === 'X' && box5.shape === 'X' && box7.shape === 'X'){
        document.querySelector('span').innerText = "X Wins"
        finished = true

        }

    }

  }
  this.eventListener = this.element.addEventListener('click', this.setShape)

}
