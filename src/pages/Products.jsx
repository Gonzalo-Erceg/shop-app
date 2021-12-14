import {productos} from "../assets/productos.js"
import ProductCard from "../component/ProductCard.jsx"
import {Container,Col,Row} from "react-bootstrap"
import {useParams} from "react-router-dom"

function Products(props){
    const {product} = useParams()
    console.log(product)

    const prod = productos.filter(data=> data.type === product)
    console.log(prod)
    return(
       <Container className="mt-5" >
           <Row>
           
             {prod.map((data,index)=><Col key={index} xxl={3} xl={4} lg={6} md={6} sm={12}><ProductCard producto={data} total={props.total}/></Col>)}
        
           </Row>
          
       </Container>
       
    )
}

export default Products


