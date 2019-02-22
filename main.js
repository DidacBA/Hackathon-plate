'use strict';

function main () {

  function buildDom(html) {
    let div = document.getElementById('div1');
    div.innerHTML = html;
    return div;
  }
  
  function infoButton() {
    let info = buildDom(`
    <h1>The future of delivery</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, natus quas explicabo accusamus totam enim porro expedita ab ad at commodi doloremque et molestias exercitationem quaerat itaque harum dicta odit.</p>
    <a id="info-button" class="button">Learn More</a>
    `);

    info.getElementById('info-button').addEventListener('click', info);
  }

  function info() {
    let info = buildDom(`
    <h1>The future of delivery</h1>
    `);

    info.getElementById('info-button').addEventListener('click', infoButton);
  }

}


window.addEventListener('load', main);