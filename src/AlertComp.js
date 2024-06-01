import React from 'react'
import Button from 'react-bootstrap/Button';

function AlertComp({ message, onClose }) {
    return (
        <div className='position-absolute top-0 start-0 d-flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100vw', height: '100vh' }}>
            <div className='w-50 p-5 text-center m-auto bg-danger-subtle text-black rounded-pill'>
                <p>{message}</p>
                <Button variant="outline-danger" onClick={onClose}>Close</Button>
            </div>
        </div>
    )
}

export default AlertComp