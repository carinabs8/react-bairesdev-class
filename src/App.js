import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { mainAlertSelector } from './redux/selectors';
import { setState } from './redux/reducers/mainAlertReducer';

import { Articles } from './Components/Articles';
import { Alert, AlertPropsType } from './Components/Alert';

function App() {
  const { open, severity, message } = useSelector(mainAlertSelector, shallowEqual);
  const alertDefaultProps: AlertPropsType = { open, severity, message };
  const dispatch = useDispatch();
  const setAlertProps = ({open, message, severity, variant}) => {
    dispatch?.(setState({open: false}));
  }

  return (
    <div className="App">
      <Alert alertProps={alertDefaultProps} setAlertProps={setAlertProps}/>
      <Articles/>
    </div>
  );
}

export default App;
