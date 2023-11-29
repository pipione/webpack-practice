import ReactDOM from 'react-dom'
import React from 'react'
import Button from './components/button'
import './styles/button.scss'

const App = () => {
  return (
    <div>
      <Button>123123</Button>
    </div>
  )
}

const rootEle = document.getElementById('root');

ReactDOM.render(<App />, rootEle);
