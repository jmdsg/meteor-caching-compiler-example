import React, { PureComponent } from "react";

import ciensBackground from "../assets/img/sidebar-1.jpg";

class Signin extends PureComponent {
    render() {
        return (
            <img src={ciensBackground} style={{ width: "100px", height: "100px" }} />
        );
    }
}

export default Signin;
