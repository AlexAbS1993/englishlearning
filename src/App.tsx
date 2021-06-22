import './App.css';
import { Test } from './pages/Test';
import {Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/test' component={Test}/>
          <Route path="/home" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
