import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import PhotoSection from './PhotoSection/PhotoSection';
import VideoSection from './VideoSection/VideoSection';
import StatementSection from './StatementSection/StatementSection'
import DocumentationSection from './DocumentationSection/DocumentationSection';

function AppRouter() {
    return (
        <Fragment>
            <div className="app-container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/photo" component={PhotoSection} />
                    <Route exact path="/video" component={VideoSection} />
                    <Route exact path="/statement" component={StatementSection} />
                    <Route exact path="/documentation" component={DocumentationSection} />
                    <Route component={Home} />
                </Switch>
            </div>
            <div className="footer">
                Made with Love by Kim Eggler, Tobias Blaser and Selim Orakçi
            </div>
        </Fragment>
    );
};

export default AppRouter;