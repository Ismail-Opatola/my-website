import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Form, Input, Media } from "reactstrap"
import { MdSearch } from "react-icons/md"
import Logo from "../images/icon.png"

const Header = () => (
  <header className="header--fixed">
    <div className="header main--container">
      <div className="header-logo-box block--inline">
        <Link to="/">
          <Media src={Logo} alt="Company Logo" className="header-logo" />
        </Link>
      </div>
      <Form className="header-search-box">
        <MdSearch className="header-search-box-logo" />
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
        />
      </Form>
      <div className="header__child-empty"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
