import React, { PureComponent } from "react";
import { Switch, Route } from "react-router-dom";

import UserProfile from "../views/UserProfile";
import Signin from "../views/Signin";
import Signup from "../views/Signup";

import logoReact from "../assets/img/logo-react-white.png";

const dashboardRoutes = [
    {
        path: "/signin",
        component: Signin,
    },
    {
        path: "/signup",
        component: Signup,
    },
    {
        path: "/reincoporation-request",
        component: UserProfile,
    },
];

const switchRoutes = (
    <Switch>
        {
            dashboardRoutes.map((prop, index) => {
                const {
                    path,
                    component,
                } = prop;
                return <Route exact path={path} component={component} key={index} />;
            })
        }
    </Switch>
);

class App extends PureComponent {
    render() {
        return (
            <div>
                <img src={logoReact} style={{ width: "100px", height: "100px" }} />
                {switchRoutes}
            </div>
        );
    }
}

export default App;
