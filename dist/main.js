/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let canvas = document.querySelector('#game-canvas'),\r\n    ctx = canvas.getContext('2d')\r\n\r\nlet game_dim = {\r\n    w:1280,\r\n    h:720\r\n}\r\n\r\n//Définition des résolution\r\ncanvas.width = game_dim.w\r\ncanvas.height = game_dim.h\r\ncanvas.style.width = `${game_dim.w}px`\r\ncanvas.style.height = `${game_dim.h}px`\r\n\r\n\r\n\r\n//les variables\r\nlet ev = {x:0,y:0}\r\nlet ball = {\r\n    x:100,\r\n    y:100,\r\n    r:10,\r\n\r\n    v:{\r\n        x:10,\r\n        y:10\r\n    }\r\n}\r\n\r\n//création de delta time\r\nlet lastUpdate = 0\r\nlet now = Date.now()\r\nconst perfectFrameTime = 1000 / 60;\r\n\r\n\r\n//Les fonctions d'animations\r\n\r\n\r\nlet animate = ()=>{\r\n\r\n\r\n    //Création de delta time\r\n    lastUpdate = now\r\n    now = Date.now()\r\n    let dt = (now - lastUpdate) / perfectFrameTime\r\n\r\n    update(dt)\r\n    draw()\r\n    requestAnimationFrame(animate)\r\n}\r\n\r\nlet getMousePos = (e) => {\r\n    let rect = canvas.getBoundingClientRect();\r\n    return {x: e.clientX - rect.left, y: e.clientY - rect.top};\r\n}\r\n\r\nlet draw = ()=>{\r\n    ctx.clearRect(0,0,game_dim.w,game_dim.h)\r\n    ctx.strokeRect(0, 0, game_dim.w, game_dim.h)\r\n\r\n    ctx.fillStyle = 'black'\r\n    ctx.fillText(`X : ${ev.x}, Y : ${ev.y}`, 100, 100)\r\n\r\n\r\n    //dessin d'un rectagle rouge\r\n    ctx.fillStyle = 'rgb(34,23,200)'\r\n    ctx.beginPath()\r\n    ctx.arc(ball.x,ball.y,ball.r,0,Math.PI * 2)\r\n    ctx.fill()\r\n\r\n}\r\n\r\nlet update = (dt)=>{\r\n    ball.x = ball.x + (ball.v.x * dt)\r\n    ball.y = ball.y + (ball.v.y * dt)\r\n\r\n    if(ball.x > game_dim.w - ball.r) {\r\n        ball.x = game_dim.w - ball.r\r\n        ball.v.x *= -1\r\n    }\r\n    if(ball.x < ball.r) {\r\n        ball.x  = ball.r\r\n        ball.v.x *= -1\r\n    }\r\n    if(ball.y > game_dim.h - ball.r){\r\n        ball.y = game_dim.h - ball.r\r\n        ball.v.y *= -1\r\n    }\r\n    if(ball.y < ball.r) {\r\n        ball.y = ball.r\r\n        ball.v.y *= -1\r\n    }\r\n}\r\n\r\ncanvas.addEventListener('mousemove',(e)=>{\r\n    ev = getMousePos(e)\r\n},false)\r\n\r\n\r\n//\r\nanimate()\n\n//# sourceURL=webpack://kassbrik/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;