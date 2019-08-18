import React from "react"
import { Nav, NavItem, NavLink, Button } from "reactstrap"
import { MdArrowDownward, MdMenu } from "react-icons/md"

const Sidebar = () => {
 
  return (
    <div className="sidebar" id="Sidebar">

      <Button className="btn-dark sidebar--btn-menu sidebar-icon-spacing">
        <MdMenu className="sidebar-icon" />
      </Button>

      <div className="sidebar--nav">
        <Nav vertical className="show-nav">
          <NavItem className="show-nav-item">
            <NavLink href="/#Showcase">ABOUT</NavLink>
          </NavItem>
          <hr />
          <NavItem className="show-nav-item">
            <NavLink href="/#Services">SERVICES</NavLink>
          </NavItem>
          <hr />
          <NavItem className="show-nav-item">
            <NavLink href="/#Projects">PROJECTS</NavLink>
          </NavItem>
          <hr />
          <NavItem className="show-nav-item">
            <NavLink href="/#Team">TEAM</NavLink>
          </NavItem>
        </Nav>
      </div>

      <Button
        className="btn-dark sidebar--btn-down"
        style={{ justifySelf: "end" }}
      >
        <MdArrowDownward className="sidebar-icon" />
      </Button>
    </div>
  )
}

export default Sidebar
