import {createStore} from 'redux';
var initalState ={
    status :false
};
var myReducer = (state = initalState, action)=>{
    return state;
};

const store = createStore(myReducer);
console.log(store.getState());
