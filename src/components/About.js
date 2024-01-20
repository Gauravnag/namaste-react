import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Mount");
    }

    render() {
        console.log("Parent Render");
        return(
            <>
                <h1>This is About us page</h1>
                <User name={"Function component"} />
                <UserClass name={"First Class component"} />
                <UserClass name={"Second Class component"} />
            </>
        )
    }
}
export default About;