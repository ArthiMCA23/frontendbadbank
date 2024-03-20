import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Navbar from './navbar.js';
 import Create from './create.js';
 import Withdraw from './withdraw.js';
 import Deposit from './deposit.js';
 import Alldata from './alldata.js';
 import Bankback from './Bankback.jpeg';
 import avmlogo from './avmlogo.png';
 import Home from './home.js';
 import {HashRouter,Routes,Route} from 'react-router-dom'
 import userContext from './context.js';



export default function App() {
  return (<>
  <Navbar/>
  <userContext.Provider 
  value={{'users':
  [{name:'xyz',
  email:'xyz@gmail.com',
  password:'123',
  amount:100}
  ]}}>
  <HashRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/deposit" element={<Deposit/>}></Route>
      <Route path="/withdraw" element={<Withdraw/>}></Route>
      <Route path="/alldata" element={<Alldata/>}></Route>

    </Routes>
  </HashRouter>
  </userContext.Provider>
  </>
   
  );
}

