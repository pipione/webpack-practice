import ReactDom from 'react-dom'
import { Button } from 'app-lib'

// console.log('appLib', appLib)
const App = () => {

  return <div>
    <h1>App</h1>
    <Button>From APP</Button>
  </div>
}


ReactDom.render(<App />, document.getElementById('root'))