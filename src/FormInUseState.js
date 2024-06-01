import React from 'react'
import { useState } from 'react';
import './App.css';

export default function FormInUseState() {
    const [formInp, setFormInp] = useState({
        email: "",
        password: "",
        status: "",
    })
    return (
        <div>
            <form className='formStyle' onSubmit={(e) => e.preventDefault()}>
                <input placeholder='enter email' type='text' value={formInp.email} onChange={(e) => setFormInp({ ...formInp, email: e.target.value })} />
                <input placeholder='enter password' type='password' value={formInp.password} onChange={(e) => setFormInp({ ...formInp, password: e.target.value })} />
                <div>
                    <input
                        type='radio'
                        name='Status'
                        value={formInp.status}
                        onChange={() => setFormInp({ ...formInp, status: 'student' })}
                        checked={formInp.status === 'student'}
                    /> Student
                    <input
                        type='radio'
                        name='Status'
                        value={formInp.status}
                        onChange={() => setFormInp({ ...formInp, status: 'engineer' })}
                        checked={formInp.status === 'engineer'}
                    /> engineer
                </div>
                <button type='submit' >submit</button>
            </form>
        </div>
    )
}