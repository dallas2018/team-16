import React from "react";
import TopBar from "./TopBar";
import Sub1 from "./Sub1";
import Sub2 from "./Sub2";
import Sub3 from "./Sub3";
import Sub5 from "./Sub5";
import Sub6 from "./Sub6";
import Sub7 from "./Sub7";
import Sub9 from "./Sub9";

class Landing extends React.Component {
  constructor (props) {
    super(props);
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
    console.log(this.state.pVal + " Before");
    var newindex = this.state.index + 1 >= 7 ? 7 : this.state.index + 1;
    this.setState({ index: newindex, pVal: Math.max(this.state.pVal, newindex * 15) });
  }

  decrementCount () {
    console.log(this.state.pVal + " After");
    var newindex = this.state.index - 1 <= 0 ? 0 : this.state.index - 1;
    this.setState({ index: newindex, pVal: Math.min(this.state.pVal, (newindex) * 15) });
  }
  render () {
    return (
      <React.Fragment>
        <TopBar name='Hello' decrementFunc={this.decrementCount} incrementFunc={this.incrementCount} val={this.state.pVal} />
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
          <Sub5 />
        }
        {
          this.state.index === 5 &&
          <Sub6 />
        }
        {
          this.state.index === 6 &&
          <Sub7 />
        }
        {
          this.state.index === 7 &&
          <Sub9 />
        }
      </React.Fragment>
    );
  }
}

export default Landing;
