import React, {Component,useState,useEffect} from 'react';

function Example() {
    const [count2, setCount2] = useState(0);
    const state = useState(0);
    const count=state[0]
    const setCount=state[1]
    console.log("-----"+count)

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        console.log("----------")
    },[count]);// Only re-run the effect if count changes

    useEffect(()=>{
        console.log("update")
        return () => {
            console.log("unmount")
        };
    })

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount2(count2 + 1)}>
                Click me
            </button>
        </div>
    );
}
export function APP() {
    return (<div>
        <Example/>
    </div>)
}

export default APP