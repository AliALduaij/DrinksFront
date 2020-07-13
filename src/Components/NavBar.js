import React from "react"



import { HomeLogo, ThemeButton, Nav, NavItem } from "../styles"
import LightLogo from "../Images/LightLogo.png"
import DarkLogo from "../Images/DarkLogo.png"

const NavBar = (props) => {
    return (
        <Nav className="navbar navbar-expand-lg">
            <HomeLogo className="navbar-brand" to="/">
                <img src={props.currentTheme === "light" ? LightLogo : DarkLogo} alt="logo" width="50" />
            </HomeLogo>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav ml-auto">

                    <NavItem className="nav-item" to="/drinks" style={{ padding: 10 }}>
                        Drinks
                    </NavItem>
                    <ThemeButton onClick={props.toggleTheme}>{props.currentTheme === "light" ? "Dark Mode" : "Light Mode"}</ThemeButton>


                </div>
            </div>
        </Nav>


    )

}
export default NavBar