import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col} from "react-bootstrap"
import NavBar from "./component/NavBar.jsx"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {useState} from "react"
import Home from "./pages/Home.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import SignIn from "./pages/SignIn.jsx"
import Products from "./pages/Products.jsx"
import ToPay from "./pages/CreditCard.jsx"
import Footer from "./component/Footer.jsx"
function App() {
  const [total, setTotal] = useState(0)
  const [isLogin, setIsLogin] = useState({login:false})
  return (
    <Router>
      <Row>
        <Col><NavBar islogin={isLogin} setislogin={setIsLogin}/></Col>
      </Row>
     <Row>
       <Col>
          <Routes>
        <Route path="/" element={<Home total={setTotal}/>}/>
        <Route path="/productos/:product" element={<Products total={setTotal}/>}/>
        <Route path="/ShoppingCart" element={<ShoppingCart total={total} setTotal={setTotal} islogin={isLogin}/>}/>
        <Route path="/SignIn" element={<SignIn islogin={setIsLogin}/>}/>
        <Route path="/to-pay"  element={<ToPay/>}/>

      </Routes>
       </Col>
     </Row>
      <Row className="align-items-end" style={{marginTop:"200px"}}>
        <Col style={{position:"fixed", bottom:"0"}}><Footer/></Col>
      </Row>
    </Router>
    
  );
}

export default App;
