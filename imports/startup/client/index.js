import React from "react";

import { render } from "react-dom";

import Main from "../../ui/Main";

Meteor.startup(() => {
    render(<Main />, document.getElementById("app"));
});
