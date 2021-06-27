import './App.css';
import { Test } from './pages/Test';
import {Switch, Route, Redirect} from 'react-router-dom'
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
            <Route path="/*" render={() => <Redirect to="/home"/>} /> 
        </Switch>
      </div>
    </>
  );
}

export default App;
