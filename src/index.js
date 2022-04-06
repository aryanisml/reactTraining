import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('swapnil')
);

/*
const element =React.createElement('span',{className:'swapnil'},'hello world');

ReactDOM.render(
  element,
   document.getElementById('swapnil'))*/

/*
   const element = React.createElement('div', {className:'sampleClass'}, 'Custom Element');

   ReactDOM.render(element, document.getElementById('swapnil'));


Angular 
<app-parent>

    <app-child [name]="name"></app-child>


</app-parent>
*/




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
