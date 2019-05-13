import React from "react";
import { connect } from "react-redux";
import { cardGroupsSelector as cardGroupsSelector } from "../redux/pageConfig";
import { refreshPage as refreshPageAction } from "../redux/refresh";
import { CardGroup } from "../components/cards";
import pages from "./constants";

const Home = ({ refreshPage, history, cardGroups }) => {
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
        {cardGroups.map((cg, index) => (
          <CardGroup key={`_index_${index}`} cardGroup={cg} index={index} />
        ))}
      </div>
    </div>
  );
};

export default connect(
  state => ({
    cardGroups: cardGroupsSelector(pages.HOME)(state)
  }),
  {
    refreshPage: refreshPageAction
  }
)(Home);
