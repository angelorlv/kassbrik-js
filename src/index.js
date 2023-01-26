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
let ev = {x:0,y:0}
let ball = {
    x:100,
    y:100,
    r:10,

    v:{
        x:10,
        y:10
    }
}

//création de delta time
let lastUpdate = 0
let now = Date.now()
const perfectFrameTime = 1000 / 60;


//Les fonctions d'animations


let animate = ()=>{


    //Création de delta time
    lastUpdate = now
    now = Date.now()
    let dt = (now - lastUpdate) / perfectFrameTime

    update(dt)
    draw()
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
    ctx.fillStyle = 'rgb(34,23,200)'
    ctx.beginPath()
    ctx.arc(ball.x,ball.y,ball.r,0,Math.PI * 2)
    ctx.fill()

}

let update = (dt)=>{
    ball.x = ball.x + (ball.v.x * dt)
    ball.y = ball.y + (ball.v.y * dt)

    if(ball.x > game_dim.w - ball.r) {
        ball.x = game_dim.w - ball.r
        ball.v.x *= -1
    }
    if(ball.x < ball.r) {
        ball.x  = ball.r
        ball.v.x *= -1
    }
    if(ball.y > game_dim.h - ball.r){
        ball.y = game_dim.h - ball.r
        ball.v.y *= -1
    }
    if(ball.y < ball.r) {
        ball.y = ball.r
        ball.v.y *= -1
    }
}

canvas.addEventListener('mousemove',(e)=>{
    ev = getMousePos(e)
},false)


//
animate()