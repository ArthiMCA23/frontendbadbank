import userContext from "./context.js";
import {useContext,useState} from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './App.css';


export default function Create(){

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  

  

  function handleEmail(e){
    const emailVal = e.target.value;
    if(!name && emailVal !== ''){
      alert("Name is Required!")
    }
    setEmail(emailVal)
  }
    
  function handlePassword(e){
    const passwordVal = e.target.value;
    if(!name && passwordVal !== ''){
      alert("Fill the Name first!")
    }
    if(!email && passwordVal !== ''){
      alert("Fill the Email first!")
      
    }
    setPassword(passwordVal)
  }


    
   

  async function handleSubmit(){

    if(password.length<8){
      alert("Enter Atleast 8 Characters as Password!"); 
    }

  

  await axios.post('https://server-37dc.onrender.com/create',{name,email,password,amount:0}).then(res=>console.log(res)).then(alert("Successfully account created"));

  }

    return(<>
    <marquee className='marquee'>create your account here...."Open an account today and start saving smarter with our bank's tailored solutions, designed to help you achieve your financial dreams while enjoying competitive interest rates and flexible options."</marquee>
    <Card style={{ width: '20rem', backgroundColor:'skyblue' }} className="text-center">
      <Card.Body>
        <h2>Create Account</h2>
      <hr></hr>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="name" >
        <Form.Label className="formlabel">Account holder name</Form.Label>
        <Form.Control type="text" placeholder="Enter userName" value={name} onChange={(e)=>setName(e.target.value)} />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="formlabel">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"value={email} onChange={handleEmail}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="formlabel">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I agree the terms & condition" />
      </Form.Group>
      <Button disabled={name === '' || email === '' || password === ''} style={{backgroundColor:'deeppink',color:'skyblue'}} type="submit">
        Create Account
      </Button>
    </Form>

      </Card.Body>
    </Card>
    </>);

}








