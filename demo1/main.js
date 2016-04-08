import React    from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

var action = {
    type : 'add'
};

function reducer(state, action){
    switch(action.type){
        case 'add':
            return state+1;
        case 'reduce':
            return state-1;
        default:
            return state;
    }
}

var store = createStore(reducer, 0);

store.subscribe(function(){
    console.log(store.getState());
});

store.dispatch(action);
store.dispatch(action);
store.dispatch({type : 'reduce'});
