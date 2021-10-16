import { ContadorActionsTypes } from './contador.enum';
import { Action } from '../ngrx-fake/ngrx';

export const ContadorReducer = (state = 10, action: Action) => {
    switch(action.type){
        case ContadorActionsTypes.incrementar:
            return state += 1;
        case ContadorActionsTypes.decrementar:
            return state -= 1;
        case ContadorActionsTypes.multiplicar:
            return state * action.payload;
        case ContadorActionsTypes.dividir:
            return state / action.payload;
        case ContadorActionsTypes.reset:
            return state = 0;
        default:
            return state;   
    }
}