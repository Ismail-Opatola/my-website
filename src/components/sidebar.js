import React from "react"
import { Nav, NavItem, NavLink, Button } from "reactstrap"
import { MdArrowDownward, MdMenu } from "react-icons/md"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button className="btn-dark">
          <MdMenu className="sidebar-icon"/>
      </Button>
      <div>
        <Nav vertical hidden={true}>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
        </Nav>
      </div>

      <Button className="btn-dark" style={{justifySelf: 'end'}}>
          <MdArrowDownward className="sidebar-icon" />
      </Button>
    </div>
  )
}

export default Sidebar
