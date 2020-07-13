import React from "react"
import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom"
import DeleteButton from "./Buttons/DeleteButton";
import drinkStore from "../stores/DrinkStore";
import UpdateButton from "./Buttons/UpdateButton";
import { observer } from "mobx-react";


const DrinkDetail = () => {

    const { drinkSlug } = useParams()
    const drink = drinkStore.drinks.find((d) => d.slug === drinkSlug)

    if (!drink) return <Redirect to="/drinks" />


    return (
        <DetailWrapper>
            <h1>{drink.name}</h1>
            <img src={drink.image} alt={drink.name} />
            <p>{drink.description}</p>
            <p>{drink.price} KD</p>
            <DeleteButton drink={drink} />
            <UpdateButton drink={drink} />
        </DetailWrapper>
    )
};

export default observer(DrinkDetail);