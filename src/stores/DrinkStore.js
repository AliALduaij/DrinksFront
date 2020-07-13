import drinks from "../Data"
import { decorate, observable } from "mobx"
import slugify from "react-slugify"


class DrinkStore {

    drinks = drinks

    createDrink = (newDrink) => {
        newDrink.id = this.drinks[this.drinks.length - 1].id + 1
        newDrink.slug = slugify(newDrink.name)
        this.drinks.push(newDrink)
    }

    deleteDrinks = (drinkID) => {

        this.drinks = this.drinks.filter((drink) => drink.id !== +drinkID)


    }

    updateDrink = (updatedDrink) => {
        const drink = this.drinks.find(d => d.id === +updatedDrink.id);
        drink.name = updatedDrink.name
        drink.price = updatedDrink.price
        drink.description = updatedDrink.description
        drink.image = updatedDrink.image

    }

}

decorate(DrinkStore, {
    drinks: observable,
})

const drinkStore = new DrinkStore()
export default drinkStore