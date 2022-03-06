const board = document.querySelector('#board')
const squares_number = 1260
const colors = ['red','green','purple','yellow','blue','orange','pink','grey','red','green','purple','yellow','blue','orange','pink','grey']

for (let i = 0; i < squares_number; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=>{
        setColor(square)
    })
    square.addEventListener('mouseleave',()=>{
        removeColor(square)
    })
    board.append(square)
}

function setColor(element){
    const color = getColors()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 8px ${color}`
}
function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColors(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}