import React,{ useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { json } from 'react-router-dom';
// import './Modal.css';


const MyVerticallyCenteredModal = (props) =>{
  const {mystate, setmystate} = props;
  console.log(props)

  const handleChange =(e) =>{
    let {name, value} = e.target;

    setmystate((prevState) => ({ ...prevState, [name]: value }));
    // setmystate({...mystate, [name]: value})
  }

  const validateUser = (e) => {
      let userLoginData = JSON.parse(localStorage.getItem('userLoginData'));
  //  console.log(JSON.stringify(Object.values(mystate)) == JSON.stringify(Object.values(userLoginData)))
   const isSame = (Object.keys(mystate).every(key => mystate[key] === userLoginData[key]))
      if(isSame){
        console.log('user credentials are matched')
        window.location.href = 'https://i.stack.imgur.com/gqKFh.png';
      }
      else{
        console.log('Invalid user credentials')
        window.location.href = 'https://simonhwalkerdotcom.files.wordpress.com/2019/05/73927540-invalid-rubber-stamp-grunge-design-with-dust-scratches-effects-can-be-easily-removed-for-a-clean-cri.jpg?w=1300';

      }
      
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

      <Modal.Header closeButton >
        <Modal.Title id="contained-modal-title-vcenter">
         <h4> User Login </h4>  
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
       
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='Email' placeholder="Enter email" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='Password' placeholder="Password" onChange={handleChange} />
          </Form.Group>
           
        </Form>
        
      </Modal.Body>

      <Modal.Footer style={{border:'none'}}>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={validateUser}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

 function ReactModal() {
  // const [userData, setUserData]=useState({Email:"pavan.kumar@rhibhus.com", Password: 123456});
  const data ={
    Email:"pavan.kumar@rhibhus.com", Password: '123456'
  }
  localStorage.setItem("userLoginData",JSON.stringify(data))
  const [userData, setUserData]= useState({Email: '', Password: ''});
  const [modalShow, setModalShow] = useState(false);
// console.log(userData)
  return (
<>  

    <div className="d-flex justify-content-center">
      <Button variant="primary" onClick={() => setModalShow(true)}>Launch vertically centered modal </Button>

      <MyVerticallyCenteredModal   mystate={userData} setmystate={setUserData} show={modalShow} onHide={() => setModalShow(false)}/>
{ console.log("object")}
    </div>
    </>
  );
}

export default ReactModal;

