import img from '../public/20201223_dialog_menoy.png'
import './index.css'
import { printMe } from './print.js'
function createApp() {
  const app = document.createElement('div');
  const imgEl = document.createElement('img');
  imgEl.src = img;
  app.innerHTML = 'Hello World 你好 世界';
  app.appendChild(imgEl);
  app.classList.add('app');
  app.onclick = printMe;
  return app;
}

document.body.appendChild(createApp());