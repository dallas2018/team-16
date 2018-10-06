import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class Drop extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { width: 0, showFaqPage: true, dropdownOpen: false, options: [] };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  toggle () {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  componentDidMount () {
    this.updateWindowDimensions();
    this.setState({ options: this.props.options });
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth });
  }

  createDropdown (arr) {
    var drops = [];
    var i;
    if (arr) {
      for (i = 0; i < arr.length; i++) {
        drops.push(<DropdownItem>{arr[i]}</DropdownItem>);
      }
    }
    return drops;
  }

  render () {
    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Select One
          </DropdownToggle>
          <DropdownMenu>
            {this.createDropdown(this.state.options)}
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default Drop;
