import { createStore, compose, applyMiddleware } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import reducer from '../reducers/';
import saga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = { 
    time: Date.now()
};

export const configureStore = (initialState = defaultState) => {
    let store = createStore(reducer, initialState, compose(
        autoRehydrate(),
        //applyMiddleware(sagaMiddleware)
    ));
    //sagaMiddleware.run(Sagas)

    persistStore(store, {storage: AsyncStorage});
    return store;
}
