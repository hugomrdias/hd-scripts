import { h, render } from 'preact';
import App from './app';
import './style.css';

const root = document.getElementById('root');

function init() {
    render(<App />, document.body, root);
    root.classList.remove('pre-spin');
}

init();
