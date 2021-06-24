import './App.css';
import { Test } from './pages/Test';
import {Switch, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Modal } from './components/Modals/Modal';
import { NotificationWrapper } from './components/Notification/NotificationWrapper';

function App() {
  return (<>
      <Modal />
      <NotificationWrapper />
      <div className="App">
        <Switch>
            <Route path='/test' component={Test}/>
            <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
