import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer")
        },1000);
       return() => {
        clearInterval(timer);
       }
    },[])
    return(
        <div className="box">
            <h1>{name}</h1>
            <p>Functional</p>
            <p>Count: {count}</p>
            <p>Count2: {count2}</p>
        </div>
    )
}
export default User;