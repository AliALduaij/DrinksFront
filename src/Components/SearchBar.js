import React from "react"
import { Search } from "../styles"


const SearchBar = props => {
    return (
        <Search placeholder="Search for your G-FUEL" onChange={(event) => props.setQuery(event.target.value)} />
    )




}

export default SearchBar