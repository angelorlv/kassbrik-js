let canvas = document.querySelector('#game-canvas'),
    ctx = canvas.getContext('2d')

let game_dim = {
    w:1280,
    h:720
}

//Définition des résolution
canvas.width = game_dim.w
canvas.height = game_dim.h
canvas.style.width = `${game_dim.w}px`
canvas.style.height = `${game_dim.h}px`



//les variables
let ev = {}
//Les fonctions d'animations


let animate = ()=>{
    draw()
    update()
    requestAnimationFrame(animate)
}

let getMousePos = (e) => {
    let rect = canvas.getBoundingClientRect();
    return {x: e.clientX - rect.left, y: e.clientY - rect.top};
}

let draw = ()=>{
    ctx.clearRect(0,0,game_dim.w,game_dim.h)
    ctx.strokeRect(0, 0, game_dim.w, game_dim.h)

    ctx.fillStyle = 'black'
    ctx.fillText(`X : ${ev.x}, Y : ${ev.y}`, 100, 100)


    //dessin d'un rectagle rouge
    ctx.fillStyle = 'red'
    ctx.fillRect(0,0,100,100)

}

let update = ()=>{

}

canvas.addEventListener('mousemove',(e)=>{
    ev = getMousePos(e)
},false)


//
animate()