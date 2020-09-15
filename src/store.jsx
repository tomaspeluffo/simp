import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/index'
import { restoreSesionAction} from './actions/userAction'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(thunk))
    )
        
    restoreSesionAction()(store.dispatch)

    return store
}


