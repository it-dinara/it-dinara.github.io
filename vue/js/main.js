function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('js/1.js'); // загружаться эти скрипты начнут сразу


// "" + 1 + 0 =  "10"
// "" - 1 + 0 =  -1
// true + false =  "truefalse" ERROR = 1
// 6 / "3" =  2
// "2" * "3" = 6
// 4 + 5 + "px" = "45px" ERROR = 9px
// "$" + 4 + 5 = "$45"

// "4" - 2 = 2

// "4px" - 2 = NaN

// 7 / 0 =  бесконечность Infinity

// "  -9\n" + 5 =  "-9\n5"
// "  -9\n" - 5 =  -4 ERROR = -14
// 5 && 2  = 2

// 2 && 5 = 5

// 5 || 0 = 5

// 0 || 5 = 5
// null + 1 =  1
// undefined + 1 =  NaN
// null == "\n0\n" = 0 ERROR = false 
// +null == +"\n0\n" = 0 ERROR = true 