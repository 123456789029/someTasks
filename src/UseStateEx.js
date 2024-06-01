import React from 'react'
import { useState } from 'react';
import './App.css';

function UseStateEx() {
    const [name, setName] = useState("")
    let chngValue = ""
    return (
        <div className='App-header' >
            <input value={name} onChange={(e) => {
                setName(e.target.value);
                chngValue = e.target.value;
            }}></input>
            <button onClick={() => name === "yassir" ? setName("noor") : setName("yassir")}>click me</button>
            <button onClick={() => setName(chngValue)}>click me</button>
            <span>{name}</span>
        </div>
    )
}

export default UseStateEx