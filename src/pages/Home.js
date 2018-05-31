import React from "react";
import { connect } from "react-redux";
import { refreshPage } from "../redux/refresh";
import Appointments from "../components/appointments";
import Tasks from "../components/tasks";

const Home = ({ refreshPage }) => {
  return (
    <div>
      Home Page
      <div style={{ float: "right" }}>
        <button onClick={() => refreshPage()}>referesh</button>
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
