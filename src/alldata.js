import userContext from "./context.js";
import { useContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import './App.css';

export default function Alldata() {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);

  async function handleClick() {
    // Implement refresh functionality if needed
  }

  function handleDelete(id) {
    axios.delete(`https://server-37dc.onrender.com/delete/${id}`).then(setTrigger(true));
  }

  useEffect(() => {
    async function fetchData() {
      await axios.get('https://server-37dc.onrender.com/data')
        .then((response) => {
          setData(response.data);
          setTrigger(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
    fetchData();
  }, [trigger]);

  return (
    <>
      <marquee className='marquee'> 
"Access all your banking data seamlessly with our comprehensive bank statement service. From transaction history to account balances, stay informed and in control of your finances with ease."</marquee>
      <Card style={{ width: '90%', backgroundColor: 'skyblue', margin: '80px auto', padding: '20px' }}>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.amount}</td>

                <td onClick={() => handleDelete(item._id)} style={{ cursor: 'pointer', color: 'red' }}><button>delete</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
