import React from "react";
import TopBar from "./TopBar";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";
import Sub3 from "./Sub3";
import Sub4 from "./Sub4";
import Sub5 from "./Sub5";
import Sub6 from "./Sub6";
import Sub7 from "./Sub7";
import Sub8 from "./Sub8";
import Sub9 from "./Sub9";
import FinalPage from "./FinalPage";

class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.options = ["Basic Info", "Demographics", "Youth", "Family", "Education", "Veteran", "Re-entry", "Employment", "Your Needs"];
    this.state = { width: 0, index: 1, pVal: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
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

  incrementCount () {
    var newindex = this.state.index + 1 >= 10 ? 10 : this.state.index + 1;
    this.setState({ index: newindex, pVal: Math.max(this.state.pVal, newindex * 10) });
  }

  decrementCount () {
    var newindex = this.state.index - 1 <= 0 ? 0 : this.state.index - 1;
    this.setState({ index: newindex, pVal: Math.min(this.state.pVal, (newindex) * 10) });
  }
  render () {
    return (
      <React.Fragment>
        <TopBar name={this.options[ this.state.index - 1 ]} decrementFunc={this.decrementCount} incrementFunc={this.incrementCount} val={this.state.pVal} />
        {
          this.state.index === 1 &&
          <Sub1 />
        }
        {
          this.state.index === 2 &&
          <Sub2 />
        }
        {
          this.state.index === 3 &&
          <Sub3 />
        }
        {
          this.state.index === 4 &&
          <Sub4 />
        }
        {
          this.state.index === 5 &&
          <Sub5 />
        }
        {
          this.state.index === 6 &&
          <Sub6 />
        }
        {
          this.state.index === 7 &&
          <Sub7 />
        }
        {
          this.state.index === 8 &&
          <Sub8 />
        }
        {
          this.state.index === 9 &&
          <Sub9 />
        }
        {
          this.state.index === 10 &&
          <FinalPage />
        }
      </React.Fragment>
    );
  }
}

export default Landing;
