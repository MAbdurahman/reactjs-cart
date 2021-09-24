import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { AppProvider } from './utils/context';

ReactDOM.render(
	<AppProvider>
		<App />
	</AppProvider>,
	document.getElementById('root')
);
