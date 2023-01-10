
const Drinks = ( {data} ) => {

    return(
        <div className="Drinks">
            <img src={data?.strDrinkThumb} alt="" />
            <article>
                <h1>Name: 
                    <span>{data?.strDrink}</span></h1>
            <p>{data?.strInstructions}</p>
            </article>
        </div>
    )

}

export default Drinks