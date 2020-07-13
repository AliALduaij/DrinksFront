import React, { useState } from "react"
import { UpdateButtonStyled } from "../../styles";
import DrinkModal from "../modals/DrinkModal";



const UpdateButton = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    const handleUpdate = () => {
        openModal()

    }
    return (
        <>
            <UpdateButtonStyled onClick={handleUpdate}>Update</UpdateButtonStyled>
            <DrinkModal closeModal={closeModal} isOpen={isOpen} oldDrink={props.drink} />



        </>
    )
}

export default UpdateButton