import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bank from "./bank.jpg";
import './App.css';

export default function Home() {
  return (
    <>
      <Card className="home-card" style={{backgroundColor:'skyblue'}}>
        <marquee className='marquee'>welcome to our bank...We're here to help you manage your finances...."Secure your future with our high-yield savings accounts, offering competitive interest rates and peace of mind for your financial goals."
</marquee>
        <Card.Img src={bank} alt="Bank"style={{width:'100vw',height:'100vh'}} />
        <Card.ImgOverlay className="custom-overlay">
          <Card.Body>
            <Card.Title className="overlay-title">
</Card.Title>
            <Card.Text className="overlay-text">
            WELCOME TO OUR AVM BANK OF INDIA<br/>
            "Secure your financial future with our trusted banking services"
            
            </Card.Text>
            <Button style={{backgroundColor:'deeppink',color:'skyblue',borderRadius:'20px',fontFamily:'gothic bold',textAlign:'center' }} href="#/create">Get Started</Button>
          </Card.Body>
        </Card.ImgOverlay>
        <footer style={{textAlign:'center', fontFamily:'gothic bold',fontSize:'20px',color:'deeppink',fontWeight:'300'}}>All rights are reserved 2024 by ARTHI VETHERAJAN</footer>
      </Card>
    </>
  );
}
