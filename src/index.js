import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponentState from './Learning/ClassComponentState/ClassComponentState';
import EventExample from './Learning/ClassComponentState/EventExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassComponentState/>
    <EventExample/>
  </React.StrictMode>
);


