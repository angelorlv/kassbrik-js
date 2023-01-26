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

eval("let canvas = document.querySelector('#game-canvas'),\r\n    ctx = canvas.getContext('2d')\r\n\r\nlet game_dim = {\r\n    w:1280,\r\n    h:720\r\n}\r\n\r\n//Définition des résolution\r\ncanvas.width = game_dim.w\r\ncanvas.height = game_dim.h\r\ncanvas.style.width = `${game_dim.w}px`\r\ncanvas.style.height = `${game_dim.h}px`\r\n\r\n\r\n\r\n//les variables\r\nlet ev = {}\r\n//Les fonctions d'animations\r\n\r\n\r\nlet animate = ()=>{\r\n    draw()\r\n    update()\r\n    requestAnimationFrame(animate)\r\n}\r\n\r\nlet getMousePos = (e) => {\r\n    let rect = canvas.getBoundingClientRect();\r\n    return {x: e.clientX - rect.left, y: e.clientY - rect.top};\r\n}\r\n\r\nlet draw = ()=>{\r\n    ctx.clearRect(0,0,game_dim.w,game_dim.h)\r\n    ctx.strokeRect(0, 0, game_dim.w, game_dim.h)\r\n\r\n    ctx.fillStyle = 'black'\r\n    ctx.fillText(`X : ${ev.x}, Y : ${ev.y}`, 100, 100)\r\n\r\n\r\n    //dessin d'un rectagle rouge\r\n    ctx.fillStyle = 'red'\r\n    ctx.fillRect(0,0,100,100)\r\n\r\n}\r\n\r\nlet update = ()=>{\r\n\r\n}\r\n\r\ncanvas.addEventListener('mousemove',(e)=>{\r\n    ev = getMousePos(e)\r\n},false)\r\n\r\n\r\n//\r\nanimate()\n\n//# sourceURL=webpack://kassbrik/./src/index.js?");

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