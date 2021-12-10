const balls = document.querySelector('.balls')
const quant = document.querySelectorAll('.slides image')
let atual = 0
let imagem = document.getElementById('atual')
let next = document.getElementById('next')
let voltar = document.getElementById('voltar')

for (let i=0; i < quant.length; i++) {
    let div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}

document.getElementById('0').classList.add('img_atual')

let pos = document.querySelectorAll(".balls div")

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id
        slide()
    })
}

voltar.addEventListener('click', () => {
    atual--
    slide()
})
next.addEventListener('click', () => {
    atual++
    slide()
})

function slide() {
    if(atual >= quant.length) {
        atual = 0
    } else if(atual < 0) {
        atual = quant.length - 1
    }
    document.querySelector('.img_atual').classList.remove('.img_atual')
    imagem.style.marginLeft = -500*atual+'px'
    document.getElementById(atual).classList.add('img_atual')
}

slide(0)