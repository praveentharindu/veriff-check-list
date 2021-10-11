import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { VerificationScreen } from './containers/verificationScreen/VerificationScreen';

import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <VerificationScreen />
    </div>
  );
}

export default App;
