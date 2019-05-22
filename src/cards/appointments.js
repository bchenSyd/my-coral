import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshPage as refreshPageAction } from "../redux/refresh";
import fetch from "../common/fetch";
import { Card } from "../components/cards";

class Appointments extends Component {
  state = {
    loading: false,
    appointments: {}
  };
  loadAppointments(cb) {
    this.setState({
      loading: true
    });
    fetch("/api/appointments").then(result => {
      const { appointments, timeStamp } = result;
      this.setState({
        loading: false,
        appointments,
        timeStamp
      });
      if (cb) {
        cb();
      }
    });
  }

  componentWillMount() {
    this.loadAppointments();
  }

  componentWillReceiveProps(nextProps) {
    const { refreshRequired: wasRefreshRequired } = this.props;
    const { refreshRequired, refreshPage } = nextProps;
    if (refreshRequired && !wasRefreshRequired) {
      this.loadAppointments(() => {
        refreshPage(false);
      });
    }
  }

  renderAppointments = _appointments => {
    const appointments = _appointments.map(p => (
      <li key={`_apmt_${p}`}>{p}</li>
    ));
    return appointments;
  };

  render() {
    const { loading, appointments, timeStamp } = this.state;
    return (
      <Card title="Appointments" {...this.props}>
        {loading ? (
          <div>loading appointments...</div>
        ) : (
          <div>
            <ul>{this.renderAppointments(appointments, timeStamp)}</ul>
            <div>lastUpdated: {timeStamp}</div>
          </div>
        )}
      </Card>
    );
  }
}

export default connect(
  state => ({
    refreshRequired: state.refresh.required
  }),
  {
    refreshPage: refreshPageAction
  }
)(Appointments);
