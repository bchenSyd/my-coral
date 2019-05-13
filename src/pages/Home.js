import React from "react";
import { connect } from "react-redux";
import { tileGroupsSelector } from "../redux/pageConfig";
import { refreshPage as refreshPageAction } from "../redux/refresh";
import { TileGroup } from "../components/tiles";
import pages from "./constants";

const Home = ({ refreshPage, history, tileGroups }) => {
  const onSearch = () => {
    history.push("/search");
  };
  return (
    <div className="Home">
      <div className="title">
        <div>
          <h2>Home Page</h2>
          <button onClick={onSearch}>search</button>
        </div>
        <button onClick={() => refreshPage(true)}>refresh</button>
      </div>
      <div className="content">
        {tileGroups.map((tg, index) => (
          <TileGroup key={`_index_${index}`} tileGroup={tg} index={index} />
        ))}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    tileGroups: tileGroupsSelector(pages.HOME)(state)
  }),
  {
    refreshPage: refreshPageAction
  }
)(Home);
