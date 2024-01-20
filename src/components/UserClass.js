import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + "Child Constructor")
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "Dummy"
            }
        }
    }

    async componentDidMount() {
        console.log(this.props.name + "Child Mount");
        const data = await fetch("https://api.github.com/users/akshay7");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }

    componentWillUnmount() {
        console.log(this.props.name + " Unmount");
    }

    render() {
        console.log(this.props.name + "Child Render");
        const {name} = this.props;
        const {count, count2} = this.state;
        return(
            <div className="box">
                <h1>{name}</h1>
                <p>Count: {count}</p>
                <p>Count: {count2}</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                } }> Increase count </button>
                <h2>API call = {this.state.userInfo.html_url} </h2>
            </div>
        );
    }
}
export default UserClass;