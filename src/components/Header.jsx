import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../css/headercss.css'
import { useDispatch, useSelector } from 'react-redux';
import { addListener } from '@reduxjs/toolkit';
import { addformdata } from '../redux/slices/formslice';



function Header() {
    const cartListArray = useSelector((state) => state.formlistReducer)

    const [vrno, setvrno] = useState('')
    const [date, setdate] = useState('')
    const [itemname, setitemname] = useState('')
    const [quantity, setquantity] = useState('')
    const [price, setprice] = useState('')

    const dispatch=useDispatch()



    console.log('==========vrno=====', vrno)
    console.log('==========date=====', date)
    console.log('==========qty=====', quantity)
    const handilesubmit=(e)=>{
        e.preventDefault();
        if(!vrno || !date|| !itemname|| !quantity|| !price){
            alert('pls fill the form complete')

        }
        else{
            const idcheck= cartListArray.find((item) => item.vrno === vrno);
            if(idcheck){
                alert("this vrno used before")
            }
            else{
                let data= {
                    vrno:vrno,
                    date:date,
                    accno:itemname,
                    quantity:quantity,
                    price:price
            
                        
                    }
            
                    
                    dispatch(addformdata(data))
                    setvrno('')
                    setitemname('')
                    setprice('')
                    setquantity('')
                    setdate('')     
                    
            
    
    
            }

            
        }
        

    }



    return (
        <div>
            <div className='ab'>
                <Form noValidate onSubmit={handilesubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="1" controlId="validationCustom01" style={{ marginLeft: '300px' }}>
                            <Form.Label>vr-No</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                onChange={(e) => setvrno(e.target.value)}
                                value={vrno}
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="2" controlId="validationCustom02" style={{ marginLeft: '260px' }}>
                            <Form.Label>vr date</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                onChange={(e) => setdate(e.target.value)}
                                value={date}

                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="5" controlId="validationCustom03" style={{ marginLeft: '300px' }}>
                            <Form.Label>Item-Name</Form.Label>
                            <Form.Control type="text" onChange={(e) => setitemname(e.target.value) } value={itemname}
                                required />
                        </Form.Group>
                        <Form.Group as={Col} md="1" controlId="validationCustom04">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" onChange={(e) => setprice(e.target.value)} value={price}
                                required />
                        </Form.Group>

                        <Form.Group as={Col} md="1" controlId="validationCustom04">
                            <Form.Label>quantity</Form.Label>
                            <Form.Control type="number" onChange={(e) => setquantity(e.target.value)} value={quantity}
                                required />
                        </Form.Group>
                    </Row>
                    <Button style={{ marginLeft: '300px' }} type="submit">Submit form</Button>
                </Form>
            </div>
        </div>
    )
}

export default Header