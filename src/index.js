import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<<<<<<< HEAD
/* Sec03 */
import Library from './chapter_03/Library';

/* Sec04 */
import Clock from './chapter_04/Clock';


/* Sec03 */
const root = ReactDOM.createRoot(document.getElementById('root'));

=======
/* 추가 */
import Library from './chapter_03/Library';

const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> 2c70fde471ff327935f2fab6076e6f36312fb96d
/* 수정 전 */
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

<<<<<<< HEAD
/* Sec03 */
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/* Sec04 */
// 에러로 인해 댓글보고 수정..
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

=======
/* 수정 후 */
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>,
  document.getElementById('root')
);
>>>>>>> 2c70fde471ff327935f2fab6076e6f36312fb96d




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
