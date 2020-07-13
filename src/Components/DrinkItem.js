import React from "react"
import { ItemWrapper } from "../styles";
import { Link } from "react-router-dom"
import DeleteButton from "./Buttons/DeleteButton";
import { observer } from "mobx-react";





const DrinkItem = props => {
    const drink = props.drink;


    return (


        <ItemWrapper >
            <Link to={`/drinks/${drink.slug}`}>
                <img alt={drink.name} src={drink.image} />
            </Link>
            <p >{drink.name}</p>
            <p >{drink.price}</p>

            <DeleteButton drink={drink} />
        </ItemWrapper>


    )
}


export default observer(DrinkItem)
