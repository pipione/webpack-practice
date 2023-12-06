import img from '../public/20201223_dialog_menoy.png'
import './index.css'
import { printYou } from './printYou.js'
function createApp() {
  const app = document.createElement('div');
  const imgEl = document.createElement('img');
  imgEl.src = img;
  app.innerHTML = 'You';
  app.appendChild(imgEl);
  app.classList.add('app');
  app.onclick = printYou;
  return app;
}

document.body.appendChild(createApp());