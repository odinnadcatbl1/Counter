import React from 'react';
import {createRoot} from 'react-dom/client';

import {createStore, bindActionCreators} from 'redux';

import Counter from './counter';
import reducer from './reducer';
import * as actions from './actions';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(reducer);
const {dispatch, getState} = store;

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

const App = () => {
    return (
        <Counter
            counter={getState()}
            inc={inc}
            dec={dec}
            rnd={() => {
                const value = Math.floor(Math.random()*10);
                rnd(value);
                }} 
        />);
}

const update = () => {
    root.render(<App/>);
};

update();
store.subscribe(update);


