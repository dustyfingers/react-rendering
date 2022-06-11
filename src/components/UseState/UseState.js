import React, { useState } from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0);

    console.log('UseState is rendering!');

    return (
        <div>
            {count}
            <button
                // this onclick flags this component for rerender, since the state has updated no matter what every time
                onClick={() => setCount(c => c + 1)}
            >
                increase count by 1
            </button>
            
            <button
                // if you reload the page, clear the console and click this button, this component will not re-render
                // the state value is not updated so this is not flagged for an update during the commit phase 
                onClick={() => setCount(0)}
            >
                set count to 0
            </button>
            <button
                // if you click the first button 5 times, to bring the state vaiable to 5,
                // then click this button one time, the component will rerender
                // but it will not rerender after that! 
                onClick={() => setCount(5)}
            >
                set count to 5
            </button>
        </div>
    )
}
