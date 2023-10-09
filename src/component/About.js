import Team from "./Team";
import TeamClass from "./TeamClass";
import React from "react"

class About extends React.Component{
  constructor() {
    super()
    console.log("Parent Constructer");
  }

  componentDidMount(){
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About us</h1>
        <h2>This is about us page</h2>
        <Team />
        <TeamClass name={"Child"} />
        <TeamClass name={"Child1"} />
        <TeamClass name={"Child2"} />
       
      </div>
    );
  }
}

/*
 - parent constructor
 - parent render
    - child constructor
    - child render
    - child1 constructor
    - child1 render
    - child2 constructor
    - child2 render

    - child mount
    - child1 mount
    - child2 mount
 - parent mount
*/

// const About = ()=>{
//     return (
//         <div>
//             <h1>About us</h1>
//             <h2>This is about us page</h2>
//             <Team />
//             <TeamClass name={"Rohit (class)"}/>
//         </div>
//     )
// }

export default About;

/*
Mounting
1. Render Phases : React do reconcilation or making a difference between older and new dom

- parent constructor
- parent render
    - child constructor
    - child render
        - grandChild1 constructor
        - grandChild1 render
    - child1 constructor
    - child1 render
        - grandChild2 constructor
        - grandChild2 render

2. Commit Phase : React do <DOM Updation>

        - grandChild1 component Mount
    - child componentMount
        - grandChild2 component Mount
    - child1 componentMount
- parent componentMount

*/
