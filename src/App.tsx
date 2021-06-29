import './App.css';
import { Test } from './pages/Test';
import {Switch, Route, Redirect} from 'react-router-dom'
import { Home } from './pages/Home';
import { Modal } from './components/Modals/Modal';
import { NotificationWrapper } from './components/Notification/NotificationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ThunkDispatch } from './store/Types/store.types';
import { useEffect } from 'react';
import { getLoginThunk } from './store/reducers/authReducer/auth.reducer';

function App() {
  const isInitialize = useSelector<RootState, boolean>(state => state.user.initialize)
  const disaptch: ThunkDispatch = useDispatch()
  useEffect(() => {
    disaptch(getLoginThunk())
  }, [disaptch])
  return (<>
    {
      isInitialize ? (
        <>
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
      ) : (
        <> 
           Идёт подготовка...
        </>
      )
    }
      
    </>
  );
}

export default App;
