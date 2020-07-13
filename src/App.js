import React, { useState } from 'react';
import { Route, Switch } from "react-router"


import './App.css';

import GlobalStyle from "./styles"

import { ThemeProvider } from "styled-components"
import DrinkList from './Components/Drinks';

import DrinkDetail from './Components/DrinkDetail';
import Home from './Components/Home';

import NavBar from './Components/NavBar';




function App() {
  const theme = {
    light: {
      mainColor: "black",
      backgroundColor: "white",
      white: "white",
      black: "black",
      red: "#ff3232",
      grey: "grey"
    },

    dark: {
      mainColor: "white",
      backgroundColor: "black",
      white: "white",
      black: "black",
      red: "#ff3232",
      grey: "grey"
    },
  }



  let [currentTheme, setTheme] = useState("light")












  const toggleTheme = () => setTheme(currentTheme === "light" ? "dark" : "light")


  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <>


        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />




        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Drinks/:drinkSlug">
            <DrinkDetail />
          </Route>
          <Route exact path="/drinks">
            <DrinkList />
          </Route>
        </Switch>
      </>


    </ThemeProvider>

  );
}

export default App;
