import './App.css';
import React, { useState } from 'react';
import { Articles } from './Components/Articles';
import { Alert, AlertPropsType } from './Components/Alert';

function App() {
  const alertDefaultProps: AlertPropsType = {open: true, severity: 'info', message: 'The form was sent'};

  const [ alertProps, setAlertProps ] = useState(alertDefaultProps);

  return (
    <div className="App">
      <Alert alertProps={alertProps} setAlertProps={setAlertProps}/>
      <Articles/>
    </div>
  );
}

export default App;
