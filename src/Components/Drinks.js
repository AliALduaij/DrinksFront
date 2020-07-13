import React, { useState } from "react"
import '../App.css';
import DrinkItem from "./DrinkItem"
import SearchBar from "./SearchBar"

import { ListWrapper } from "../styles"
import AddButton from "./Buttons/AddButton";
import drinkStore from "../stores/DrinkStore";
import { observer } from "mobx-react";









const DrinkList = () => {

    const [query, setQuery] = useState("")





    const drinkList = drinkStore.drinks.filter((d) => d.name.includes(query)).map((d) => <DrinkItem drink={d} key={d.id} />)
    return (
        <>
            <SearchBar setQuery={setQuery} />
            <ListWrapper >{drinkList}</ListWrapper>
            <AddButton />
        </>
    )
}

export default observer(DrinkList)


