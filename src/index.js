/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import globalStyles from './tokens/globalStyles';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
globalStyles();
