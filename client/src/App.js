import React,{useState} from 'react';
import './App.css';
import Home from './Common/DefaultVeiw';
export const UserDetails = React.createContext({})
function App() {
  const [userDetails, setUserDetails] = useState({})
  return (
    <>
    <UserDetails.Provider value={[userDetails,setUserDetails]}>
     <Home></Home> 
    </UserDetails.Provider>
    </>
  );
}

export default App;
