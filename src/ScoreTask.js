import React from 'react'
import { useState } from 'react';
import './App.css';

function ScoreTask() {
    const [count, setCount] = useState({
        fn: "",
        sn: "",
        score: 0,
    })

    return (
        <div>
            <form className='formStyle' onSubmit={(e) => e.preventDefault()}>
                <input placeholder='enter first name' type='text' value={count.fn} onChange={(e) => setCount({ ...count, fn: e.target.value })} />
                <input placeholder='enter second name' type='text' value={count.sn} onChange={(e) => setCount({ ...count, sn: e.target.value })} />

                <button type='submit' onClick={() => {
                    setCount({ ...count, score: (count.score) + 1 })
                }}>+1</button>
            </form>
            <p>You clicked {count.score} times</p>
        </div>
    )
}

export default ScoreTask