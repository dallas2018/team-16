import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class Drop extends React.Component {
  constructor (props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { width: 0, showFaqPage: true, dropdownOpen: false, options: [], curr: "Select One" };
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
    console.log(e);
    this.setState({ curr: e });
  }

  render () {
    const listItems = this.state.options.map((listItem) =>
      <DropdownItem>{listItem}</DropdownItem>
    );

    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.curr}
          </DropdownToggle>
          <DropdownMenu>
            {listItems}
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default Drop;
