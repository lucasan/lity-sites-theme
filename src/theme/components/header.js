import React, { useState } from "react"
import { Menu } from "./menu"
import { Logo } from "./logo"
import "./../assets/scss/navbar.scss"
import logo from "./../assets/img/logo.svg"

export const Header = (props) => {

  const [active, setActive] = useState(false)

  let menuClass = active ? "navbar-menu navbar-end is-active" : "navbar-menu navbar-end"

  return (
    <nav id={props.id} className={"navbar has-shadow is-fixed-top"}>
      <div className={"container"}>

        <Logo parentClass={"navbar-brand"} src={logo} alt={"Lucas Torres Logo"} width={60} height={60}>
          <div id="navbarBurger" className="navbar-burger burger" data-target="main-nav-menu"
               onClick={() => setActive(!active)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Logo>

        <Menu menuClass={menuClass} id={"main-nav-menu"}/>
      </div>
    </nav>
  )
}