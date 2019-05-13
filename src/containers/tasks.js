import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshPage as refreshPageAction } from "../redux/refresh";
import fetch from "../common/fetch";

class Tasks extends Component {
  state = {
    loading: false,
    tasks: {}
  };
  loadTasks(cb) {
    this.setState({
      loading: true
    });
    fetch("/api/tasks").then(result => {
      const { tasks, timeStamp } = result;
      this.setState({
        loading: false,
        tasks,
        timeStamp
      });
      if (cb) {
        cb();
      }
    });
  }

  componentWillMount() {
    this.loadTasks();
  }

  componentWillReceiveProps(nextProps) {
    const { refreshRequired: wasRefreshRequired } = this.props;
    const { refreshRequired, refreshPage } = nextProps;
    if (refreshRequired && !wasRefreshRequired) {
      this.loadTasks(() => {
        refreshPage(false);
      });
    }
  }

  renderAppointments = (_tasks, timeStamp) => {
    const tasks = _tasks.map((t, index) => (
      <div key={`_apmt_${index}`}>{t}</div>
    ));
    tasks.push(<div key="timestamp">lastUpdated: {timeStamp}</div>);
    return tasks;
  };

  render() {
    const { loading, tasks, timeStamp } = this.state;
    return loading ? (
      <div>loading tasks...</div>
    ) : (
      this.renderAppointments(tasks, timeStamp)
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
)(Tasks);
