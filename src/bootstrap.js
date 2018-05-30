import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, branch } from 'recompose';
import { loadPageConfig } from './redux/pageConfig';

class Bootstrap extends Component {
    componentDidMount() {
        const { loadPageConfig } = this.props;
        loadPageConfig('/pageconfig');
    }

    render() {
        const { isLoading } = this.props;
        return <div>
            {isLoading ?
                <div> loading...</div>
                : <h1>coral home</h1>
            }
        </div>
    }
};

export default connect(
    ({ pageConfig }) => ({
        isLoading: pageConfig.loading
    }),
    {
        loadPageConfig
    })(Bootstrap);