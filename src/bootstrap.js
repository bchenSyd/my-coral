import React, { createElement, Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import {
  loadPageConfig as loadPageConfigAction,
  pageSelector
} from "./redux/pageConfig";
import { pageMap } from "./pages";

class Bootstrap extends Component {
  componentDidMount() {
    const { loadPageConfig } = this.props;
    loadPageConfig("/api/pageconfig");
  }

  displayPages = (location, allPages) => (
    <Switch location={location}>
      {allPages.map(p => (
        <Route
          exact={p.path === "/"}
          key={`_path_key_${p.path}`}
          path={p.path}
          render={props => createElement(pageMap.get(p.name), props)}
        />
      ))}
    </Switch>
  );
  render() {
    const {
      location,
      isLoading,
      pages: { homePage, allPages }
    } = this.props;
    return (
      <div>
        {isLoading || !homePage ? (
          <div> loading...</div>
        ) : (
          this.displayPages(location, allPages)
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.pageConfig.loading,
    pages: pageSelector(state)
  }),
  {
    loadPageConfig: loadPageConfigAction
  }
)(Bootstrap);
