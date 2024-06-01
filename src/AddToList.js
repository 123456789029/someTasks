import React from 'react'
import { useState } from 'react'
import './App.css';

function AddToList() {
    const [devices, setDevices] = useState([])
    const [inpVal, setInpVal] = useState("")

    function handleAddBtnClk() {
        let AddDevice = [...devices, inpVal]
        setDevices(AddDevice)
        setInpVal("");
    }
    function handleDelBtnClk(i) {
        // let delDevice = [...devices]
        // delDevice.splice(i, 1)
        // setDevices(delDevice)

        let delDevice = devices.filter((_, index) => index !== i);
        setDevices(delDevice);
    }
    return (
        <div>
            <form className='formStyle' onSubmit={(e) => e.preventDefault()}>
                <input placeholder='write device name' value={inpVal} onChange={(e) => setInpVal(e.target.value)} />
                <button type='submit' onClick={handleAddBtnClk}>Add</button>
            </form>
            <ul>
                {
                    devices.map((el, i) => (
                        <li key={i}>
                            {el} <button onClick={() => handleDelBtnClk(i)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AddToList