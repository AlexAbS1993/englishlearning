import './App.css';
import { Test } from './pages/Test';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/test' component={Test}/>
      </Switch>
    </div>
  );
}

export default App;
