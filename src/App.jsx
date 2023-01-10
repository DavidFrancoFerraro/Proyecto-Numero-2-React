import { useState,useEffect } from 'react'
import './App.css'
import Drinks from './assets/Components/Drinks'
import axios from 'axios'

function App() {
  const [namesDrink, setNamesDrink] = useState([])
  const [name, setName] = useState("")
  const [dataError, setDataError] = useState("")


  useEffect((  ) =>{
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => setNamesDrink(resp.data.drinks))
    .catch((error) => {
      setDataError( "Does not correspond to a drink on the menu!" )
  setName([])})
  }, [ name ])

  const searchDrinks = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase())
  }

  return (
    <div className="App">
      <form onSubmit={ (e) => searchDrinks(e)}>
        <input type="text" placeholder="Search by drink name" />
        <button type="submit" onClick={ ( ) => setName(name)}><i className="fa-solid fa-martini-glass-citrus"></i></button>
      </form>
      <div className='App-Drink'>
      { 
      namesDrink?
        namesDrink.map( (drink, index) => (<Drinks key={`namesDrink-${index}`} data = {drink} />) ): <h1>ESPERA! Busca bien y... <img src="https://cdn.memegenerator.es/imagenes/memes/full/2/34/2345512.jpg" alt="" /></h1>
      }
      <h1>{dataError}</h1>
      </div>
    </div>
  )
}

export default App
