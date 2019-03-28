import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import RootReducer from './store/reducers/RootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'
import firebase from './config/fbConfig'

const store = createStore(RootReducer, applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })))
const rrfConfig = {
  userProfile: 'users'
}
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>, document.getElementById('root'));

