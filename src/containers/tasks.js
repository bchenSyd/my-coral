import React, { Component } from "react";
import { connect } from "react-redux";
import { refreshPage } from "../redux/refresh";
import fetch from "../common/fetch";

class Tasks extends Component {
  state = {
    loading: false,
    Tasks: {}
  };
  loadTasks(cb) {
    this.setState({
      loading: true
    });
    fetch("/tasks")
      .then(result => {
        const { tasks, timeStamp } = result;
        this.setState({
          loading: false,
          tasks,
          timeStamp
        });
        if (cb) {
          cb();
        }
      })
      .catch(error => { console.log('retry here')});
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

  renderTasks = (tasks, timeStamp) => (
    <div>
      {tasks.map((t, index) => (
        <div key={`_tasks_${index}`} style={{ margin: "10px" }}>
          {t}
        </div>
      ))}
      <div style={{ marginTop: "60px" }}>lastUpdated: {timeStamp}</div>
    </div>
  );

  render() {
    const { loading, tasks, timeStamp } = this.state;
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
        {loading ? "loading Tasks" : this.renderTasks(tasks, timeStamp)}
      </div>
    );
  }
}

export default connect(
  state => ({
    refreshRequired: state.refresh.required
  }),
  {
    refreshPage
  }
)(Tasks);
