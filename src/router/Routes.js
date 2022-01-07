import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import RouteKey from './routeKey';

import { withAuthentication } from '../hoc';

const Routes = () => {
    console.log('test')
    return (
        <Switch>

            {RouteKey.map(({ route, component, shouldAuthenticate }) => (
                <Route
                    key={component}
                    exact
                    path={route}
                    component={shouldAuthenticate ? withAuthentication(component) : component}
                />
            ))}

            <Redirect to="/" />

        </Switch>

    );
}

export default Routes;
