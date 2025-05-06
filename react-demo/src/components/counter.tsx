import { useState } from "react";

export const Counter = () => {
    const [ count, setCount ] = useState(0);

    return (
        <div>
           <h2>Count</h2>
           <p>You clicked {count} times</p>
            {
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>}
        </div>
    );
}