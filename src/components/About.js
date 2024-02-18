import React from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    <UserContext.Consumer>
                        {({loggingUser}) => <h2 className="font-bold">{loggingUser}</h2> }
                    </UserContext.Consumer>
                </div>
            </>
        )
    }
}
export default About;