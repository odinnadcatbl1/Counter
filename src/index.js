import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';
import App  from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(reducer);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);



