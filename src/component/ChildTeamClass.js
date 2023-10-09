import React from "react";

class ChildTeamClass extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props.name + "constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "componentMount");
  }

  render() {
    console.log(this.props.name + "render");
    return (
    <h1>ChildTeamClass</h1>
    )
  }
}

export default ChildTeamClass;
