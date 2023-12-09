import { printMe } from './printMe';
import './index.css';
const createInput = () => {
  const element = document.createElement('input');
  element.type = 'text';
  element.placeholder = '请输入';
  return element;

}
const createComponent = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Hello World';
  element.onclick = printMe
  element.classList.add('app');
  return element;
}

let element = createComponent()
document.body.appendChild(element);
document.body.appendChild(createInput());

if (module.hot) {
  // module.hot.accept('./printMe.js', function() {
  //   console.log('Accepting the updated printMe module!');
  //   // printMe();
  //   document.body.removeChild(element);
  //   element = createComponent();
  //   document.body.appendChild(element);
  // })

  module.hot.accept(err => {
    if (err) {
      console.error('Cannot apply HMR update.', err);
    }
  });
}