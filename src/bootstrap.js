import React, { createElement, Component } from 'react';
import { connect } from 'react-redux';
import {
    Switch,
    Route,
} from 'react-router-dom';
import { loadPageConfig, pageSelector } from './redux/pageConfig';
import { pageMap } from './pages';


class Bootstrap extends Component {
    componentDidMount() {
        const { loadPageConfig } = this.props;
        loadPageConfig('/pageconfig');
    }

    render() {
        const { location, isLoading, pages: { homePage, allPages } } = this.props;
        return <div>
            {isLoading || !homePage ?
                <div> loading...</div>
                : <Switch location={location}>
                    {
                        allPages.map(p => {
                            return <Route exact={p.path === '/'} key={`_path_key_${p.path}`} path={p.path} render={
                                props => {
                                    return createElement(pageMap.get(p.name), props)
                                }
                            } />
                        })
                    }
                </Switch>
            }
        </div>
    }
};

export default connect(
    state => ({
        isLoading: state.pageConfig.loading,
        pages: pageSelector(state)
    }),
    {
        loadPageConfig
    })(Bootstrap);