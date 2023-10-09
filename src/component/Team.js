import { useState } from "react";

const Team = ()=>{
    const [count] = useState(1);
    return(
        <>
            <h2>count = {count}</h2>
            <h1>Name : Rohit kumar</h1>
            <h2>Position : Dev</h2>
        </>
    )
}

export default Team; 