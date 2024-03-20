import userContext from "./context.js";
import {useContext,useState,useEffect} from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css';
import axios from "axios";

export default function Withdraw(){
    
    const [withdraw,setWithdraw]=useState()
    var [total,setTotal]=useState()
    const[data,setData]=useState([])
    var [name,setName] = useState('');
    var [password,setPassword] = useState('');
    const[overdraft,setOverdraft] = useState('');

    // useEffect(()=>{

    //   async function fetchdata(){
    //    await axios.get('http://localhost:8080/data').then(res=>{console.log(res.data);
    //    setdata(res.data);
    //    let itemLength =res.data.length-1
    //    setTotal(res.data[itemLength].amount)})
    //   }
    //   fetchdata();
    
    // },[total])


    
    useEffect(()=>{
      async function fetchData(){
          if(name && password){
          await axios.get('https://server-37dc.onrender.com/data').then(res=>{console.log(res.data);
          setData(res.data);
          let user = res.data.find(user=>user.name === name && user.password === password)
          if(user){
              setTotal(user.amount)
          }
      })
     
  }
}fetchData();
  },[name,password])



   function handlePassword(e){
    const passwordVal = e.target.value;
if(!name && passwordVal !== ''){
  alert("Fill the Name first!");
}

setPassword(passwordVal)
}

function handleWithdraw(e){
  const withdrawVal = e.target.value;
  setOverdraft(withdrawVal)
  if(!name || !password){
      alert("Fill name and password first!");
      return
  }
  
  for(let i=0;i<data.length;i++){
  
      if(data[i].name === name && data[i].password === password){
          
          if(data[i].amount < withdrawVal){
              alert("Account Overdraft! You cannot withdraw more than your available amount");
              return;
          }
          else{
              setWithdraw(withdrawVal)
              return;
          }
      }
  }
 
 
}


async function handleUpdate(e){

        
  e.preventDefault();
  console.log(withdraw)

  if(password.length<8){
      alert("Wrong Password!");
      return;
    }

  let validAcc = false;
  for(let i=0;i<data.length;i++){
     
      if(data[i].name === name && data[i].password === password){
          console.log(data[i]._id)
          await axios.put(`https://server-37dc.onrender.com/update/${data[i]._id}`,{amount:data[i].amount  - Number(withdraw)});
          const newTotal = data[i].amount - Number(withdraw)
          setTotal(newTotal);
          data[i].amount = newTotal
          alert("Successfully Withdrawn")
          validAcc = true;
          return;
      }
  }
  if(!validAcc){
      alert("Invalid Account!");
  }
  
}

    
    


    return(<>
     <marquee className='marquee'>Withdraw your amount here..."Experience the freedom to withdraw your funds whenever you need them with our convenient banking services. Whether it's for a planned expense or unexpected emergencies, access your money with ease and confidence, knowing that we're here to support your financial needs." </marquee>
   
<Card style={{ width: '20rem', backgroundColor:'skyblue', }} className="text-center">
      <Card.Body>
      <h2>withdraw</h2>
        <hr></hr>        
        <h3>Balance $:{total}</h3>
        <hr></hr>

    <Form onSubmit={handleUpdate}>
   
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label className="formlabel">Account holder name</Form.Label>
      <Form.Control type="text" placeholder="Enter userName" value={name} onChange={(e)=>setName(e.target.value)} />


        <Form.Label className="formlabel"> password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>



        <Form.Label className="formlabel"> withdraw amount</Form.Label>
        <Form.Control type="number" placeholder="Enter amount" onChange={handleWithdraw}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button disabled={name === '' || password === '' ||withdraw<=0 || data.find(user=>(user.name === name && user.password === password) && overdraft > total)} style={{backgroundColor:'deeppink',color:'skyblue'}} type="submit">
        Withdraw
      </Button>

    </Form> 
      </Card.Body>
    </Card>
    </>)
}


