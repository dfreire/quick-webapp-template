import React from "react/addons";
import Router from "react-router";
import { DefaultRoute, Link, NotFoundRoute, Redirect , Route, RouteHandler} from 'react-router';

import Home from './home.jsx';

var RootPane = React.createClass({
    render: function() {
        return (
            <RouteHandler/>
        );
    }
});

var routes = (
    <Route handler={RootPane} path="/">
        <Redirect from="/"      to="/home" />
        <Redirect from="/home/" to="/home" />
        <Route name="home" path="/home" handler={Home} />
    </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler />, document.getElementById('rootPane'));
});
