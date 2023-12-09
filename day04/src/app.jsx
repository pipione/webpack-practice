import { hot } from 'react-hot-loader/root';

import {BComp} from './b-comp';

const AppInner = () => {
  return (
    <div>
      <h1>Hello World!2</h1>
      <BComp/>
      <input type="text" placeholder="请输入" />
    </div>
  );
}



export const App =  hot(AppInner);