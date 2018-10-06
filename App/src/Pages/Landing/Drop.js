import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

var choose = "Select One";

class Drop extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { width: 0, showFaqPage: true, dropdownOpen: false, options: [], curr: choose, index: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick (e) {
    this.setState({ curr: e.target.innerText });
  }
  createDropdown (arr) {
    var drops = [];
    var i;
    if (arr) {
      for (i = 0; i < arr.length; i++) {
        var a = arr[i];
        drops.push(<DropdownItem onClick={this.handleClick} >{a}</DropdownItem>);
      }
    }
    return drops;
  }

  render () {
    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.curr}
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
