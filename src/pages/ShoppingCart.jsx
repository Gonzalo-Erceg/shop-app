
import ProductCard from "../component/ProductCard.jsx"
import {Container,Col,Row, Alert,Card, Button} from "react-bootstrap"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function ShoppingCart(props){
    const navigate = useNavigate()
    const direccionar=()=>{
        if(props.islogin.login){
            navigate("/to-pay",{replace:true})
        }else{
            navigate("/SignIn",{replace:true})
        }
    }
    const state = useSelector(state=>state)
    return(

       <Container className="mt-5" >
           
           <Row>
           
             {state.length === 0 ? <Alert className="text-center">Agrege producto a tu carrito en <Link to="/">La pagina principal</Link></Alert>: state.map((data,index)=><Col key={index} xxl={3} xl={4} lg={6} md={6} sm={12}><ProductCard producto={data} shop={true} index={index} total={props.setTotal}/></Col>)}
        
           </Row>
           <Row className="mt-5">
               {props.total===0 ? null:<Col > <Card><Card.Body className="d-flex justify-content-around"><h2>Total con envio: ${props.total}</h2>  <Button onClick={direccionar}>Continuar compra</Button></Card.Body></Card></Col>}
               
           </Row>
       </Container>
       
    )
}


export default ShoppingCart;