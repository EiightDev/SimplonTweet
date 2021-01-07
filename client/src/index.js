import React from 'react';
import ReactDOM from 'react-dom';

import Body from './pages/Body';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'



function App() {
  
  return (
    <div className='container'>
    <Body />
    </div>
  );
}

ReactDOM.render(
    <App/>,
    document.getElementById('App')
)