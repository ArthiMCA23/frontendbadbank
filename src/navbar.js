import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import avmlogo from './avmlogo.png';

// import avmlogo from './avmlogo1.png';


export default function Navs() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='my-navbar'>
        <Container>
          <Navbar.Brand className='avm'><img src={avmlogo}style={{width:'50px',height:'40px'}}></img> AVM BANK OF INDIA </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"className='mb3 justify-content-end'>
            <Nav  sticky='top'>
              <Nav.Link href="#/home">HOME</Nav.Link>
              <span className='item'>Welcome to Bad Bank</span>

              <Nav.Link href="#/create">CREATE</Nav.Link>
              <span className='item'>Create your Account on here!</span>

              <Nav.Link href="#/deposit">DEPOSIT</Nav.Link>
              <span className='item'>Deposit your amount on here!</span>

              <Nav.Link href="#/withdraw">WITHDRAW</Nav.Link>
              <span className='item'>Withdraw your amount on here!</span>

              <Nav.Link href="#/alldata">ALL DATA</Nav.Link>
              <span className='item'>All Account info details here!</span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
