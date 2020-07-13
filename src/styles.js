import styled, { createGlobalStyle } from "styled-components"
import { Link, NavLink } from "react-router-dom"

const GlobalStyle = createGlobalStyle`
body {
    color: ${props => props.theme.mainColor};
    background-color: ${props => props.theme.backgroundColor};
    text-align: center;
  }
`;

const Title = styled.h2`
color:red;
`


const Description = styled.h4`
color:red;
`

export const UpdateButtonStyled = styled.p`
color: ${(props) => props.theme.pink};

`

const ListWrapper = styled.div`
        align-items: center;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
`

const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 400px;
    height: 400px;
  }
  p {
    text-align: center;
    color: ${props => props.theme.mainColor};
    &.drink-price {
      color: ${props => props.theme.mainColor};
    }
  }
`;

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

const Logo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`

const ThemeButton = styled.button`
font-size: 1em;

padding: 0.25em 1em;
border-radius: 3px;
background-color: ${props => props.theme.grey};
color: ${props => props.theme.black};

`

const DeleteButtonStyled = styled.h4`
color:${props => props.theme.red};


`

const Search = styled.input`
padding: 0.5rem;
margin: 1rem auto;
display: block;
width: 40%;

`

export const HomeLogo = styled(Link)`
  padding: 0.75em;

  img {
    width: 8rem;
  }
`;

export const Nav = styled.div`
background-color: ${(props) => props.theme.backgroundColor}

`

export const NavItem = styled(NavLink)`
padding: 0.25em 1em;
color: ${(props) => props.theme.mainColor};

&.active {
  color: ${(props) => props.theme.pink};
  background-color: fuchsia;

}
`

export const CreateButtonStyled = styled.button`
color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }


`




export default GlobalStyle;
export { Title, Description, ListWrapper, Logo, ItemWrapper, ThemeButton, DeleteButtonStyled, DetailWrapper, Search }
