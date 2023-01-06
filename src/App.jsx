import { useState,useEffect } from 'react'
import './App.css'
import Drinks from './assets/Components/Drinks'
import axios from 'axios'

function App() {
  const [namesDrink, setNamesDrink] = useState([])
  const [name, setName] = useState("")
  useEffect((  ) =>{
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => console.log(resp.data))
    .catch(error => console.error(error))
  }, [])


  return (
    <div className="App">
      <form action="">
        <input type="text" />
        <button type="submit"><i class="fa-solid fa-martini-glass-citrus"></i></button>
      </form>
      
      {
        namesDrink.map( (namesDrink, index) => (<Drinks key={`namesDrink-${index}`} data = {namesDrink} />) )
      }
      
    </div>
  )
}

export default App
