import React from 'react';
import ReactDOM from 'react-dom/client';
//import Profile from './Profile';
//import './index.css';
//import reportWebVitals from './reportWebVitals';
import App from './App';
//import UserList from './UserList';
// import CreatePoster from './CreatePoster';
//import MarketingForm from './MarketingForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <CreatePoster/>  Update the component name here */}
        <App/>     
        {/* <MarketingForm/>     */}
         {/* <UserList/>  */}
         {/* <Profile/> */}
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
