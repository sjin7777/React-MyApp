import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 추가 */
import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* 수정 전 */
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/* 수정 후 */
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
