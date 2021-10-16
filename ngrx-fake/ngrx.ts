export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (stae: T, action: Action ): T
}