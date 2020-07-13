import React from "react"
import { DeleteButtonStyled } from "../../styles";
import drinkStore from "../../stores/DrinkStore";
import { useHistory } from "react-router-dom";

const DeleteButton = (props) => {
    const history = useHistory();


    const handleDelete = () => {


        drinkStore.deleteDrinks(props.drink.id);
        history.push("/drinks");


    }
    return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>

}

export default DeleteButton