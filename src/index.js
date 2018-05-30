import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();
ReactDOM.render(<Provider store={store}>
    <Router>
        <Route component={App} />
    </Router>
</Provider>, document.querySelector('#root'));
registerServiceWorker();
