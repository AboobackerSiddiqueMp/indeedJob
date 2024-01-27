import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { deleteFromformtList, takedatabyid, updateFormData } from '../redux/slices/formslice';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Details() {
  const [datatoupdate,setdatatoupdate]=useState([])
  const cartListArray = useSelector((state) => state.formlistReducer)
  console.log(cartListArray)
  const dispatch=useDispatch()
  const removefromtable=(did)=>{
    dispatch(deleteFromformtList(did))
  }
  const updatedata=(id)=>{
    handleShow()

    console.log('========gfd=====',id)
    const itemToupdate = cartListArray.find((item) => item.vrno === id);
    setdatatoupdate(itemToupdate)


  

  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log('======du=========',datatoupdate)
   const uploadupdate=()=>{
    dispatch(updateFormData(datatoupdate))
    console.log('=========uppdata=====',datatoupdate)
    handleClose()
   }


return (


    <div className='mt-5' style={{ marginLeft: '250px', marginRight: '250px' }}>
      <table class="table table-bordered" style={{ borderColor: 'black' }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Vr-No</th>
            <th scope="col">Item-name</th>
            <th scope="col">date</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">Totel</th>
            <th scope="col">Edit</th>





          </tr>
        </thead>
        <tbody>
          {
            cartListArray?.length > 0 ?

              cartListArray.map((data) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{data.vrno}</td>
                  <td>{data.accno}</td>
                  <td>{data.date}</td>
                  <td> {data.quantity}</td>
                  <td>{data.price}</td>
                  <td>{data.quantity * data.price}</td>
                  <td width={'150px'}><button className='btn btn-primary' onClick={()=>removefromtable(data.vrno)}><i class="fa-solid fa-trash"></i></button>
                  <button  className='btn btn-primary ms-2' onClick={()=>updatedata(data.vrno)}>update</button>
                  </td>



                </tr>
  
        
      )):<h4>no data</h4>
    }
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        name:
        <input type="text" className='form-control' value={datatoupdate.accno} onChange={(e)=>setdatatoupdate({...datatoupdate,accno:e.target.value})}  />
        quantity:
        <input type="text" className='form-control' value={datatoupdate.quantity} onChange={(e)=>setdatatoupdate({...datatoupdate,quantity:e.target.value})} />
        price:
        <input type="text" className='form-control' value={datatoupdate.price} onChange={(e)=>setdatatoupdate({...datatoupdate,price:e.target.value})} />


        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  onClick={uploadupdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Details