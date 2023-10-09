import React from "react";
import ChildTeamClass from "./ChildTeamClass"



class TeamClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " constructor")
    this.state = {
      count: 1,
    };
  }

  componentDidMount(){
    console.log(this.props.name +" componentDidMount");
  }

  render() {
    const { name } = this.props;
    let { count } = this.state;
    console.log(this.props.name + " Render");
    return (
      <>
      {/* {name==="Child" ? <ChildTeamClass name={"grandChild1"} /> : <ChildTeamClass name={"grandChild2"} />} */}
        <p>count = {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Me
        </button>
        <button
          onClick={() => {
            this.setState({
              count: count - 1,
            });
          }}
        >
          Decrease Me
        </button>
        <h1>Name : {name}</h1>
        <h2>Position : Dev</h2>
      </>
    );
  }
}

export default TeamClass;
