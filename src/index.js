import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Sec03 */
import Library from './chapter_03/Library';

/* Sec04 */
import Clock from './chapter_04/Clock';

/* Sec05 */
import CommentList from './chapter_05/CommentList';

/* Sec06 */
import NotificationList from './chapter_06/NotificationList';

/* Sec07 */
import Accommodate from './chapter_07/Accommodate';

/* Sec08 */
import ConfirmButton from './chapter_08/ConfirmButton';

/* Sec09 */
import LandingPage from './chapter_09/LandingPage'

/* Sec10 */
import AttendanceBook from './chapter_10/AttendanceBook';

/* Sec11 */
import SignUp from './chapter_11/SignUp';

/* Sec12 */
import Calculator from './chapter_12/Calculator';

/* Sec13 */
import ProfileCard from './chapter_13/ProfileCard';

/* Sec14 */
import DarkOrLight from './chapter_14/DarkOrLight';

/* Sec15 */
import Blocks from './chapter_15/Blocks';


/* Sec03 */
const root = ReactDOM.createRoot(document.getElementById('root'));


/* 수정 전 */
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


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

// 에러 수정 후
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);


/* Sec05 */
// 에러로 인해 댓글보고 수정..
// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 에러 수정 후
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// )


/* Sec06 */
// 에러로 인해 수정..
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 에러 수정 후
// root.render(
//     <NotificationList />
// )


/* Sec07 */
// root.render(
//     <Accommodate />
// )


/* Sec08 */
// root.render(
//     <ConfirmButton />
// )


/* Sec09 */
// root.render(
//     <LandingPage />
// )

/* Sec10 */
// root.render(
//     <AttendanceBook />
// )

/* Sec11 */
// root.render(
//     <SignUp />
// )

/* Sec12 */
// root.render(
//     <Calculator />
// )

/* Sec13 */
// root.render(
//     <ProfileCard />
// )

/* Sec14 */
// root.render(
//     <DarkOrLight />
// )

/* Sec15 */
root.render(
    <Blocks />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
