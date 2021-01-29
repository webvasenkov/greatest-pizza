import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
                <NavLink to="/">Pizza</NavLink>
            </Nav>
        </>
    )
}

export default Navbar
