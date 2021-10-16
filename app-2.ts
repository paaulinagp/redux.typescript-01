
import { Action } from './ngrx-fake/ngrx';
import { 
    incrementadorAction, 
    decrementadorAction, 
    multiplicadorAction, 
    divisorAction, 
    resetAction
} from './contador/contador.actions';

enum ActionsTypes {
    incrementar = 'INCREMENTAR',
    decrementar = 'DECREMENTAR',
    multiplicar = 'MULTIPLICAR',
    dividir     = 'DIVIDIR',
    reset       = 'RESET'
}

const reducer = (state = 10, action: Action) => {
    switch(action.type){
        case ActionsTypes.incrementar:
            return state += 1;
        case ActionsTypes.decrementar:
            return state -= 1;
        case ActionsTypes.multiplicar:
            return state * action.payload;
        case ActionsTypes.dividir:
            return state / action.payload;
        case ActionsTypes.reset:
            return state = 0;
        default:
            return state;   
    }
}

// Usar el reducer
console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, divisorAction));
console.log(reducer(10, resetAction));