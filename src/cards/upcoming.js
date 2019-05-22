import React, { Component } from "react";
import {Card} from '../components/cards';

class Upcoming extends Component {
  render() {
    return (
      <Card title = "Upcoming" {...this.props}>
        content goes here content goes here content goes here content goes here
        content goes here content goes here content goes here
      </Card>
    );
  }
}

export default Upcoming;
