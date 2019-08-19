import React, { Component } from 'react'
import { Nav, NavItem, NavLink, Button } from "reactstrap"
import { MdArrowUpward, MdArrowDownward, MdMenu } from "react-icons/md"


class Sidebar extends Component {
  constructor(props) {
   super(props)
   this.state = {
    show: "down"
   }
  }
  render() {
    const { show } = this.state
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
      {/* <div> */}
        <Button
          className="btn-dark sidebar--btn-down"
          style={{ justifySelf: "end" }}
          hidden={show === "up"}
          onClick={() => {this.setState({show : "up" })}}
        >
          <a href={"/#Footer"} alt="Footer">
            <MdArrowDownward className="sidebar-icon" />
          </a>
        </Button>
        <Button
          className="btn-dark sidebar--btn-down"
          style={{ justifySelf: "end" }}
          hidden={show === "down"}
          onClick={() => {this.setState({show : "down" }) }}
        >
          <a href={"/#Showcase"} alt="Showcase">
            <MdArrowUpward className="sidebar-icon" />
          </a>
        </Button>
      {/* </div> */}
    </div>
    )
  }
}

export default Sidebar
