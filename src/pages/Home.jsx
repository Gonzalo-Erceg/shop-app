import {productos} from "../assets/productos.js"
import ProductCard from "../component/ProductCard.jsx"
import {Container,Col,Row} from "react-bootstrap"


function Home(props){
    
    
    return(
       <Container className="mt-5" >
           <Row>
           
             {productos.map((data,index)=><Col key={index} xxl={3} xl={4} lg={6} md={6} sm={12}><ProductCard producto={data} total={props.total}/></Col>)}
        
           </Row>
       </Container>
       
    )
}


export default Home


