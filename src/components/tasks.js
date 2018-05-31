import React, { Component } from "react";
import { connect } from "react-redux";
import fetch from "../common/fetch";

class Tasks extends Component {
  state = {
    loading: false,
    tasks: {}
  };
  loadAppointments() {
    this.setState({
      loading: true
    });
    fetch("/tasks").then(result => {
      const { tasks, timeStamp } = result;
      this.setState({
        loading: false,
        tasks,
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

  renderTasks = (tasks, timeStamp)=> <div>{
    tasks.map((t, index) =>  <div key={`_apmt_${index}`} style={{ margin: "10px" }}>
          {t}
        </div>
      )
    }
    <div style={{marginTop:'60px'}}>
        lastUpdated: {timeStamp}
    </div>
    </div>

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
        {loading
          ? "loading tasks"
          : this.renderTasks(tasks, timeStamp)
        }
      </div>
    );
  }
}

export default Tasks;
