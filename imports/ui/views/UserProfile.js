import React, { PureComponent } from "react";

import avatar from "../assets/img/faces/marc.jpg";

class UserProfile extends PureComponent {
    render() {
        return (
            <img src={avatar} style={{ width: "100px", height: "100px" }} />
        );
    }
}

export default UserProfile;
