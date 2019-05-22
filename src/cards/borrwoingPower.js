import React, { Component } from "react";
import { Card } from '../components/cards';

class BorrowingPower extends Component {
  static title = "Borrowing Power";
  
  render() {
    return (
      <Card title = "Borrowing Power" {...this.props}>
        content goes here content goes here content goes here content goes here
        content goes here content goes here content goes here
      </Card>
    );
  }
}

export default BorrowingPower;
