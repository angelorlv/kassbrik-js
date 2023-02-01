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

    

    ctx.fillStyle='blue'
    ctx.lineWidth = 1.5
     //Brique
    function brique(x, y , w, h , color ){

        //initialisation brique
        ctx.strokeRect(x,y,w,h)
        ctx.strokeRect(x+5,y+5,w-10,h-10)

        //all
        ctx.fillStyle= color
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+w,y);
        ctx.lineTo(x+w,y+h);
        ctx.lineTo(x, y+h);
        ctx.fill()

        //face
        ctx.fillStyle='rgba(0,0,0,0.35)'
        ctx.beginPath();
        ctx.moveTo(x+5,y+5);
        ctx.lineTo(x+w-5,y+5);
        ctx.lineTo(x+w-5,y+h-5);
        ctx.lineTo(x+5, y+h-5);
        ctx.fill()


        //gauche
        ctx.fillStyle= 'rgba(0,0,0,0.2)'   
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+5,y+5);
        ctx.lineTo(x+5,y+h-5);
        ctx.lineTo(x, y+h);
        ctx.fill()

        //droite
        ctx.fillStyle='rgba(0,0,0,0.5)'
        ctx.beginPath();
        ctx.moveTo(x+w,y);
        ctx.lineTo(x+w-5,y+5);
        ctx.lineTo(x+w-5,y+h-5);
        ctx.lineTo(x+w, y+h);
        ctx.fill()

        //bottom
        ctx.fillStyle='rgba(0,0,0,0.7)'
        ctx.beginPath();
        ctx.moveTo(x,y+h);
        ctx.lineTo(x+5,y+h-5);
        ctx.lineTo(x+w-5,y+h-5);
        ctx.lineTo(x+w, y+h);
        ctx.fill()
  
    }

    //test fonction brique
    brique(100,150,80,40, 'white')
}

let update = ()=>{

}

canvas.addEventListener('mousemove',(e)=>{
    ev = getMousePos(e)
},false)


//
animate()