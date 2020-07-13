import React, { useState } from "react"
import Modal from "react-modal"
import { CreateButtonStyled } from "../../styles";
import drinkStore from "../../stores/DrinkStore";




const DrinkModal = ({ closeModal, isOpen, oldDrink }) => {

    const modalStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            width: "40%",
        },
    };


    const [drink, setDrink] = useState(oldDrink ? oldDrink : {
        name: "",
        price: 0,
        description: "",
        image: ""

    });

    const handleChange = (event) => {
        setDrink({ ...drink, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        drinkStore[oldDrink ? "updateDrink" : "createDrink"](drink);
        closeModal()
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalStyle}
        >
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <div className="col-6">
                        <label>Name</label>
                        <input required type="text" name="name" value={drink.name} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="col-6">
                        <label>Price</label>
                        <input required type="number" name="price" value={drink.price} min="1" className="form-control" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input required type="text" name="description" value={drink.description} className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input required type="text" name="image" value={drink.image} className="form-control" onChange={handleChange} />
                </div>
                <CreateButtonStyled type="submit">{oldDrink ? "Update" : "Create"}</CreateButtonStyled>
            </form >

        </Modal>
    )
}

export default DrinkModal