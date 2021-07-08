import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, ThunkDispatch } from './store/Types/store.types';
import React, { Suspense, useEffect } from 'react';
import { getLoginThunk } from './store/reducers/authReducer/auth.reducer';
const Test = React.lazy(() => import('./pages/Test'))
const Home = React.lazy(() => import('./pages/Home'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Modal = React.lazy(() => import('./components/Modals/Modal'))
const NotificationWrapper = React.lazy(() => import('./components/Notification/NotificationWrapper'))

function App() {
  const isInitialize = useSelector<RootState, boolean>(state => state.user.initialize)
  const disaptch: ThunkDispatch = useDispatch()
  useEffect(() => {
    disaptch(getLoginThunk())
  }, [disaptch])
  return (
        <>
          <Suspense 
            fallback={<div>Loading...</div>}> 
          <Modal />
          <NotificationWrapper />
          </Suspense>
          { isInitialize ? (
          <div className="App">
            <Suspense fallback={<div>Идёт подготовка...</div>}>
        <Switch>
            <Route path='/test' component={Test}/>
            <Route path="/home"  component={Home}/>
            <Route path="/admin" component={Admin} />
            <Route path="/*" render={() => <Redirect to="/home"/>} /> 
        </Switch>
           </Suspense>
      </div>
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
