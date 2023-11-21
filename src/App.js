import './App.css';
import Dashbord from './Dashbord/Dashbord.js';
import MobileCheck from './Component/Utilities/MobileCheck/MobileCheck';
import OfferState from './context/OfferState';
import React, { useState,useContext} from 'react';
import Login from './Component/Login/Login.js';


function App() {

  const [tokendata, setTokendata] = useState("");
  const [adminname, setAdminname] = useState("");
  const [adminEmail, setAdminEmail] = useState("");


    
    if(!tokendata) {
        return <Login setToken={setTokendata}  setAdmin={setAdminname}  setAdminEmail={setAdminEmail}/>
    }

  return (
    <OfferState adminname={adminname} adminEmail={adminEmail} tokendata={tokendata}>
    <div >
      <MobileCheck/>
      <Dashbord/>
    </div>
    </OfferState>
  );
}

export default App;
