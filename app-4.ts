import { createStore, Store } from 'redux';
import { ContadorReducer } from "./contador/contador.reducer";
import { incrementadorAction, multiplicadorAction } from "./contador/contador.actions";

const store: Store = createStore( ContadorReducer );

store.subscribe( () => {
    console.log('STATE: ', store.getState());    
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(multiplicadorAction);