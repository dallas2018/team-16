import React from "react";
import { Jumbotron, Button } from "reactstrap";

class Landing extends React.Component {
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
        <Jumbotron>
          <h1 className='display-3'>Hello, world!</h1>
          <p className='lead'>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr classN='my-2' />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className='lead'>
            <Button color='primary'>Learn More</Button>
          </p>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Landing;
