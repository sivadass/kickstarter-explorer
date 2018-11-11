import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Icon from "../common/icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div className="container">
          <Link to="/">
            <img className="logo" src={logo} alt="Kickstarter Explorer" />
          </Link>
          <a href="#">
            <Icon name="user" size={24} />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
