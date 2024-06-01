import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AlertComp from './AlertComp';


function TaskSubmitForm() {
    const [formInp, setFormInp] = useState({
        name: "",
        tel: "",
        age: "",
        isEmployee: false,
        salary: 0
    });
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleAlert = async (message) => {
        setAlertMessage(message);
        setShowAlert(true);
        await Delay(10000);
        setShowAlert(false);
    };

    const handleInputChange = (key, value) => {
        setFormInp({ ...formInp, [key]: value });
    };

    const handleOnClickSubmit = () => {
        if (formInp.name === "" || formInp.name.length < 3) {
            handleAlert("Please enter a name with at least 3 characters.");
        } else if (formInp.tel === "" || formInp.tel.length < 5) {
            handleAlert("Please enter the telephone number and must be more than 5 numbers.");
        } else if (formInp.age === "" || formInp.age < 12) {
            handleAlert("Please enter the age and must be more than 12 years.");
        } else if (formInp.salary === 0 || formInp.salary > 500) {
            handleAlert("Please enter the salary and must be less than $500.");
        } else {
            handleAlert("The application submitted successfully");
        }
    };
    const BtnIsDisabled = formInp.name === "" || formInp.tel === "" || formInp.age === "" || formInp.salary === "";
    const handleDivClick = () => {
        console.log("div click");
        if (showAlert) {
            setShowAlert(false)
        }
    }
    return (
        <div onClick={handleDivClick} className='w-100 p-5'>
            <h1 className='text-center text-white p-0'>Requesting a Loan</h1>
            <hr />
            <Form className="d-flex flex-column justify-content-evenly w-50 m-auto " onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                    className='mb-3'
                    placeholder="Name"
                    value={formInp.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                />
                <Form.Control
                    className='mb-3'
                    placeholder="Phone Number"
                    type='tel'
                    value={formInp.tel}
                    onChange={(e) => handleInputChange("tel", e.target.value)}
                />
                <Form.Control
                    className='mb-3'
                    placeholder="Age"
                    type='text'
                    value={formInp.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                />
                <Form.Check
                    className='d-flex justify-content-center mb-3'
                    inline
                    label="Employee?"
                    checked={formInp.isEmployee}
                    onChange={(e) => handleInputChange("isEmployee", e.target.checked)}
                />
                <Form.Control
                    className='mb-3'
                    placeholder="Salary: less than $500"
                    value={formInp.salary}
                    onChange={(e) => handleInputChange("salary", e.target.value)}
                />
                <Button disabled={BtnIsDisabled} className={BtnIsDisabled ? "isDisabled" : ""} variant="outline-warning" type="submit" onClick={handleOnClickSubmit}>SEND</Button>
            </Form>
            {showAlert && <AlertComp message={alertMessage} onClose={() => setShowAlert(false)} />}
        </div>
    );
}

const Delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

// function AlertComp({ message, onClose }) {
//     return (
//         <div className='position-absolute top-0 start-0 d-flex' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100vw', height: '100vh' }}>
//             <div className='w-50 p-5 text-center m-auto bg-danger-subtle text-black rounded-pill'>
//                 <p>{message}</p>
//                 <Button variant="outline-danger" onClick={onClose}>Close</Button>
//             </div>
//         </div>
//     );
// }

export default TaskSubmitForm;
