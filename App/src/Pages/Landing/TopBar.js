import React from "react";
import { Progress } from "reactstrap";
import { Flex } from "grid-styled";
import { FontAwesome } from "react-js-vector-icons";

class TopBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = { width: 0, showFaqPage: true };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({ width: window.innerWidth });
  }

  render () {
    return (
      <React.Fragment>
        <Flex style={{ width: "100%", padding: "50px" }}>
          <div style={{ fontSize: "35px", padding: "20px" }}>{this.props.name}</div>
          <Flex style={{ marginLeft: "-12vw", alignSelf: "center", justifyContent: "center", width: "100%" }}>
            <div onClick={this.props.decrementFunc}>
              <FontAwesome name='chevron-left'
                size={20}
              />
            </div>
            <Progress style={{ fontSize: "100px", alignSelf: "center", width: "450px", marginLeft: "15px", marginRight: "15px" }} color='success' value={this.props.val} />
            <div onClick={this.props.incrementFunc}>
              <FontAwesome name='chevron-right'
                size={20}
              />
            </div>
          </Flex>
        </Flex>
      </React.Fragment>
    );
  }
}

export default TopBar;
