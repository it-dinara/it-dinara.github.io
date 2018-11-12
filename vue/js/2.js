function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('js/3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3