import React from "react";
import { connect } from "react-redux";
import { refreshPage } from "../redux/refresh";
import Appointments from "../containers/appointments";
import Tasks from "../containers/tasks";

const Home = ({ refreshPage }) => {
  return (
    <div>
      Home Page
      <div style={{ float: "right" }}>
        <button onClick={() => refreshPage(true)}>referesh</button>
      </div>
      <div>
        <Appointments />
        <Tasks />
      </div>
    </div>
  );
};

export default connect(null, {
  refreshPage
})(Home);
