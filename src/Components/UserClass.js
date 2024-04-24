import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.timer = setInterval(() => {
      console.log("OP");
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    const { name } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-class">
        <h3>Count : {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {this.props.location}</h2>
      </div>
    );
  }
}

export default UserClass;
