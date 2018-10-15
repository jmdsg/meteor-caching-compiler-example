import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./layouts/App";

const Main = ({ ...props }) => {
    const {
        client,
        account,
    } = props;
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
};

export default Main;
