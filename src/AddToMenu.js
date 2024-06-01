import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function AddToMenu() {
    const [inpVal, setInpVal] = useState("")
    const [meals, setMeals] = useState([])
    function handleAddMealBtnClk() {
        const AddNewMeal = { id: meals.length + 1, name: inpVal, Qty: 1 }
        let AddMeal = [...meals, AddNewMeal]
        setMeals(AddMeal)
        setInpVal("");
    }
    function handleAddBtnClk(i) {
        const AddQty = [...meals]
        AddQty[i].Qty += 1;
        setMeals(AddQty)
    }
    function handleDelBtnClk(i) {
        const AddQty = [...meals]
        if (AddQty[i].Qty > 1) {
            AddQty[i].Qty -= 1;
            setMeals(AddQty)
        }
        else if (AddQty[i].Qty === 1) {
            let NewMealArr = [...meals]
            NewMealArr.splice(i, 1)
            setMeals(NewMealArr);
        }

    }
    return (
        <div className='w-50'>
            <InputGroup className="mb-3" onSubmit={(e) => e.preventDefault()}>
                <Form.Control
                    placeholder="Enter Meal"
                    aria-label="Enter Meal"
                    aria-describedby="basic-addon2"
                    value={inpVal}
                    onChange={(e) => {
                        setInpVal(e.target.value)
                    }}
                />
                <Button variant="outline-secondary" id="button-addon2" type="submit" onClick={handleAddMealBtnClk}>
                    Add Meal
                </Button>
            </InputGroup>
            <ListGroup as="ol" numbered>
                {
                    meals.map((el, i) => (
                        < ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-center"
                            action variant="info"
                        >
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className="fw-bold ms-1">{el.name}</div>
                                <div className="d-flex justify-content-end">
                                    <Button variant="outline-success" className='text-center px-auto me-1 w-50' onClick={() => handleAddBtnClk(i)}>+</Button>
                                    <Button variant="outline-danger" className='text-center px-auto me-1 w-50' onClick={() => handleDelBtnClk(i)}>-</Button>
                                    <Badge bg="dark" pill className='pt-2 mx-2 w-50'>+{meals[i].Qty}</Badge>
                                </div>

                            </div>

                        </ ListGroup.Item>
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default AddToMenu



