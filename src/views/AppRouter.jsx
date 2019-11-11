import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import PhotoSection from './PhotoSection/PhotoSection';
import VideoSection from './VideoSection/VideoSection';
import DocumentationSection from './DocumentationSection/DocumentationSection';

function AppRouter() {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/photo" component={PhotoSection} />
                <Route exact path="/video" component={VideoSection} />
                <Route exact path="/documentation" component={DocumentationSection} />
                <Route component={Home} />
            </Switch>
        </Fragment>
    );
};

export default AppRouter;