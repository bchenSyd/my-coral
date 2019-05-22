import React, { Component } from "react";
import { Card } from '../components/cards';

class Needs extends Component {
  static title = "Needs & Goals";
  
  render() {
    return (
      <Card title = "Needs & Goals" {...this.props}>
        content goes here content goes here content goes here content goes here
        content goes here content goes here content goes here
      </Card>
    );
  }
}

export default Needs;
