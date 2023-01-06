
const Drinks = ( {data} ) => {

    return(
        <div>
            <img src={data.drinks.strDrinkThumb} alt="" />
            <h1>{data.drinks.strDrink}</h1>
            <p>{data.strInstructions}</p>
        </div>
    )

}

export default Drinks