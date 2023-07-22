import React, {useState} from 'react';
import SavingForm from './components/form/SavingForm';
import InvestmentList from './components/investment_list/InvestmentList';
import './App.css';


function App() {
  const [userData, setUserData] = useState()


  const addUserData = data =>
  {
    setUserData(data)
  }
  

  return (
    <div>
      <SavingForm onAddUserData={addUserData}/>
      {<InvestmentList data={userData}/>}
    </div>
  )
  
}

export default App;
