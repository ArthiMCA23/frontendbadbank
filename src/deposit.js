import userContext from "./context.js";
import {useContext,useEffect,useState} from"react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import './App.css';

export default function Deposit(){
    // const ctx=useContext(userContext)
    const [dep,setDep]=useState()
   const[data,setData]=useState([])
   var [total,setTotal]=useState()
   var [name,setName] = useState('');
   var [password,setPassword] = useState('');




 
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

   function handleDeposit(e){
    const depval = e.target.value;
    if(depval<=0){
      alert("this is negative deposit")
    }
    setDep(depval)
   }


   async function handleUpdate(e){

    e.preventDefault();
    // console.log(deposit)

    if(password.length<8){
        alert("Wrong Password!");
        return;
      }

    let validAcc = false;
    for(let i=0;i<data.length;i++){
       
        if(data[i].name === name && data[i].password === password){
            console.log(data[i]._id)
            await axios.put(`https://server-37dc.onrender.com/update/${data[i]._id}`,{amount:data[i].amount  + Number(dep)});
            setTotal(data[i].amount + Number(dep));
            alert("Successfully Deposited")
           
                
            validAcc = true;
            return;
        }
}
if(!validAcc){
    alert("Invalid Account!");
}
}




    return(<>
    <marquee className='marquee'>Deposit your amount here..."Maximize your savings potential by depositing any amount, large or small, into our trusted bank accounts, where every deposit earns you interest and brings you closer to your financial goals."</marquee>
    
<Card style={{ width: '20rem', backgroundColor:'skyblue', }} className="text-center">
      <Card.Body>
        <h2>Deposit</h2>
        <hr></hr>
        <h3>RS:{total}</h3>
        <hr></hr>
    <Form onSubmit={handleUpdate}>

      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label className="formlabel">Account holder name</Form.Label>
      <Form.Control type="text" placeholder="Enter userName" value={name} onChange={(e)=>setName(e.target.value)} />

        <Form.Label className="formlabel"> password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>

        <Form.Label className="formlabel"> Deposit amount</Form.Label>
        <Form.Control type="number" placeholder="Enter amount" onChange={handleDeposit}/>
       
      </Form.Group>

      <Button disabled={name==='' || password === '' || dep<=0} style={{backgroundColor:'deeppink',color:'skyblue'}} type="submit">
        Deposit
      </Button>

    </Form>
    
      </Card.Body>
    </Card>
    </>)
}













// <h1>Deposit</h1>
//     <input type="number" onChange={(e)=>setDep(e.target.value)}></input>
//     <button onClick={handleClick}>submit</button>
//     <h1>{total}</h1>