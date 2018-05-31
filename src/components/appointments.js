import React, { Component } from "react";
import { connect } from "react-redux";
import fetch from "../common/fetch";

class Appointments extends Component {
  state = {
    loading: false,
    appointments: {}
  };
  loadAppointments() {
    this.setState({
      loading: true
    });
    fetch("/appointments").then(result => {
      const { appointments, timeStamp } = result;
      this.setState({
        loading: false,
        appointments,
        timeStamp
      });
    });
  }

  componentWillMount() {
    this.loadAppointments();
  }

  componentWillReceiveProps(nextProps) {
    const { needRefresh } = this.props;
    const { needRefresh: needRefreshNext } = nextProps;
    if (needRefreshNext && !needRefresh) {
    }
  }

  renderAppointments = (appotinments, timeStamp) => (
    <div>
      {appotinments.map((t, index) => (
        <div key={`_apmt_${index}`} style={{ margin: "10px" }}>
          {t}
        </div>
      ))}
      <div style={{ marginTop: "60px" }}>lastUpdated: {timeStamp}</div>
    </div>
  );

  render() {
    const { loading, appointments, timeStamp } = this.state;
    return (
      <div
        style={{
          width: "500px",
          height: "300px",
          border: "1px solid red",
          margin: "20px",
          float: "left"
        }}
      >
        {loading
          ? "loading appointments"
          : this.renderAppointments(appointments, timeStamp)
          }
      </div>
    );
  }
}

export default Appointments;
