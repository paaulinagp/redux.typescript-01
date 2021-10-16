// Acciones
interface Action {
    type: string;
    payload?: any;
}

enum ActionsTypes {
    incrementar = 'INCREMENTAR',
    decrementar = 'DECREMENTAR',
    multiplicar = 'MULTIPLICAR',
    dividir     = 'DIVIDIR'
}

// Los reducers siempre deben devolver un estado (STATE)
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
        default:
            return state;   
    }
}

const incrementadorAction: Action = {
    type: 'INCREMENTAR'
}

const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}

const multiplicadorAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const divisorAction: Action = {
    type: 'DIVIDIR',
    payload: 2
}


// Usar el reducer
console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicadorAction));
console.log(reducer(10, divisorAction));

