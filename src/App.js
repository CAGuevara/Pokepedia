
import { useContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login'
//contexts
import UserContext from './contexts/UserContext';

import './App.css';

function App() {
  //in able to use our context we import first then we can use the usecontext hook to access out context
  // const user = useContext(UserContext);
  // console.log(user)
  //we will pass on our user to all of app's children via de provider value prop
  const [user, setUser]=  useState('')
  return (
    <div className="App">
      {/* {/* all context comes with the provider component This allows us to use this as a wrapper and share information to all of its children. after hardcoding the value (example) we need the value prop inside our provider. *} */}
      <UserContext.Provider value={user}>
        <Nav />
  
        {/* We need to wrap all of our routes inside React Routes component  */}
        <Routes>
            <Route path='login' element={<Login setUser={setUser} />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
