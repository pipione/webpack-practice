import { hot } from 'react-hot-loader/root';

const AppInner = () => {
  return (
    <div>
      <h1>Hello World!1</h1>
      <input type="text" placeholder="请输入" />
    </div>
  );
}



export const App =  hot(AppInner);