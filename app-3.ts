import { Action, Reducer } from "./ngrx-fake/ngrx";
import { ContadorReducer } from "./contador/contador.reducer";
import { incrementadorAction, multiplicadorAction } from "./contador/contador.actions";

class Store <T> {
    // private state: T;

    constructor(
        private reducer: Reducer<T>, 
        private state: T
    ) {}


    public getState() {
        return this.state;
    }

    public dispatch( action: Action) {
        this.state = this.reducer(this.state, action);
    }
}


const store = new Store(ContadorReducer, 10);

console.log(store.getState());
store.dispatch(incrementadorAction);
store.dispatch(multiplicadorAction);
console.log(store.getState());
