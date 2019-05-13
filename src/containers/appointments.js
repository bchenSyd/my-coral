import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshPage as refreshPageAction } from "../redux/refresh";
import fetch from "../common/fetch";

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

  renderAppointments = (_appointments, timeStamp) => {
    const appointments = _appointments.map(p => (
      <div key={`_apmt_${p}`}>{p}</div>
    ));
    appointments.push(<div key="timestamp">lastUpdated: {timeStamp}</div>);
    return appointments;
  };

  render() {
    const { loading, appointments, timeStamp } = this.state;
    return loading ? (
      <div>loading appointments...</div>
    ) : (
      this.renderAppointments(appointments, timeStamp)
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
