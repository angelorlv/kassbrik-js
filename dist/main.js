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

eval("let canvas = document.querySelector('#game-canvas'),\r\n    ctx = canvas.getContext('2d')\r\n\r\nlet game_dim = {\r\n    w:1280,\r\n    h:720\r\n}\r\n\r\n//Définition des résolution\r\ncanvas.width = game_dim.w\r\ncanvas.height = game_dim.h\r\ncanvas.style.width = `${game_dim.w}px`\r\ncanvas.style.height = `${game_dim.h}px`\r\n\r\n\r\n\r\n//les variables\r\nlet ev = {}\r\n//Les fonctions d'animations\r\n\r\n\r\nlet animate = ()=>{\r\n    draw()\r\n    update()\r\n    requestAnimationFrame(animate)\r\n}\r\n\r\nlet getMousePos = (e) => {\r\n    let rect = canvas.getBoundingClientRect();\r\n    return {x: e.clientX - rect.left, y: e.clientY - rect.top};\r\n}\r\n\r\nlet draw = ()=>{\r\n    ctx.clearRect(0,0,game_dim.w,game_dim.h)\r\n    \r\n    ctx.strokeRect(0, 0, game_dim.w, game_dim.h)\r\n    \r\n    ctx.fillStyle = 'black'\r\n    ctx.fillText(`X : ${ev.x}, Y : ${ev.y}`, 100, 100)\r\n\r\n    \r\n\r\n    ctx.fillStyle='blue'\r\n    ctx.lineWidth = 1.5\r\n     //Brique\r\n    function brique(x, y , w, h , color ){\r\n\r\n        //initialisation brique\r\n        ctx.strokeRect(x,y,w,h)\r\n        ctx.strokeRect(x+5,y+5,w-10,h-10)\r\n\r\n        //all\r\n        ctx.fillStyle= color\r\n        ctx.beginPath();\r\n        ctx.moveTo(x,y);\r\n        ctx.lineTo(x+w,y);\r\n        ctx.lineTo(x+w,y+h);\r\n        ctx.lineTo(x, y+h);\r\n        ctx.fill()\r\n\r\n        //face\r\n        ctx.fillStyle='rgba(0,0,0,0.35)'\r\n        ctx.beginPath();\r\n        ctx.moveTo(x+5,y+5);\r\n        ctx.lineTo(x+w-5,y+5);\r\n        ctx.lineTo(x+w-5,y+h-5);\r\n        ctx.lineTo(x+5, y+h-5);\r\n        ctx.fill()\r\n\r\n\r\n        //gauche\r\n        ctx.fillStyle= 'rgba(0,0,0,0.2)'   \r\n        ctx.beginPath();\r\n        ctx.moveTo(x,y);\r\n        ctx.lineTo(x+5,y+5);\r\n        ctx.lineTo(x+5,y+h-5);\r\n        ctx.lineTo(x, y+h);\r\n        ctx.fill()\r\n\r\n        //droite\r\n        ctx.fillStyle='rgba(0,0,0,0.5)'\r\n        ctx.beginPath();\r\n        ctx.moveTo(x+w,y);\r\n        ctx.lineTo(x+w-5,y+5);\r\n        ctx.lineTo(x+w-5,y+h-5);\r\n        ctx.lineTo(x+w, y+h);\r\n        ctx.fill()\r\n\r\n        //bottom\r\n        ctx.fillStyle='rgba(0,0,0,0.7)'\r\n        ctx.beginPath();\r\n        ctx.moveTo(x,y+h);\r\n        ctx.lineTo(x+5,y+h-5);\r\n        ctx.lineTo(x+w-5,y+h-5);\r\n        ctx.lineTo(x+w, y+h);\r\n        ctx.fill()\r\n  \r\n    }\r\n\r\n    //test fonction brique\r\n    brique(100,150,80,40, 'white')\r\n}\r\n\r\nlet update = ()=>{\r\n\r\n}\r\n\r\ncanvas.addEventListener('mousemove',(e)=>{\r\n    ev = getMousePos(e)\r\n},false)\r\n\r\n\r\n//\r\nanimate()\n\n//# sourceURL=webpack://kassbrik/./src/index.js?");

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