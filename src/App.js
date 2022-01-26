import axios from 'axios';
import { useContext, useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login'
import Home from './pages/Home'
import PokemonList from './pages/PokemonList';

//contexts
import UserContext from './contexts/UserContext';

import './App.css';

const App = ()=> {
  //in able to use our context we import first then we can use the usecontext hook to access out context
  // const user = useContext(UserContext);
  // console.log(user)
  //we will pass on our user to all of app's children via de provider value prop
  const [user, setUser]=  useState('')
  const [pokeList, setPokeList] = useState([])

  useEffect (() => {
    fetchPokemon()

    //dependency array:  if empty, it will call useEffect once only when DOM Component loads. 
  },[])

  const fetchPokemon = async () => {
     try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118")
      setPokeList(response.data.results)
      
    }catch(error){
      console.log(error)
    }
  }

console.log('This is Pokelist',pokeList)
  return (
    <div className="App">
      {/* {/* all context comes with the provider component This allows us to use this as a wrapper and share information to all of its children. after hardcoding the value (example) we need the value prop inside our provider. *} */}
      <UserContext.Provider value={user}>
        <Nav />
  
        {/* We need to wrap all of our routes inside React Routes component  */}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='login' element={<Login setUser={setUser} />} />
            <Route path='pokemon/list' element={<PokemonList pokeList ={pokeList} itemsPerPage={8}/>} /> 
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
