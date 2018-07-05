import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import Immutable from 'immutable'
import reducer from './reducer'
import App from './App'
import rootSaga from './sagas/index'

import registerServiceWorker from './registerServiceWorker'
const loggerMiddleware = createLogger({
  actionTransformer: (action) => {
    const newAction = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const i of Object.keys(action)) {
      if (Immutable.Iterable.isIterable(action[i])) {
        newAction[i] = action[i].toJS();
      } else {
        newAction[i] = action[i];
      }
    }

    return newAction;
  },
  // needed to convert logged immutableJS state to readable objects.
  stateTransformer: (state) => {
    const newState = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const i of Object.keys(state)) {
      if (Immutable.Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    }

    return newState;
  },
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,
   applyMiddleware(sagaMiddleware,loggerMiddleware)
);
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
