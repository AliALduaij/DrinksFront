import React, { useState } from "react"

import { BsPlusCircle } from "react-icons/bs"
import DrinkModal from "../modals/DrinkModal";


const AddButton = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)
    return (
        <>
            <BsPlusCircle
                size="2em" onClick={() => setIsOpen(true)} />
            <DrinkModal isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}

export default AddButton