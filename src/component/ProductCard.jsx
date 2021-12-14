import {Card, Button, Accordion} from "react-bootstrap"
import {MdAddShoppingCart} from "react-icons/md"
import {useDispatch} from "react-redux"
import {AiOutlineDelete} from "react-icons/ai"
import style from "./ProductCard.module.css"
function ProductCard(props){
    const dispach = useDispatch()
    const add = ()=>{
        props.total(state=> {return state+props.producto.price})
        dispach({type:"add", content:props.producto})
    }
    const remove= ()=>{
        props.total(state=> {return state - props.producto.price})
        dispach({type:"remove",content:props.index})
    }
    
    return(
        <Card  className={`mx-auto mt-5 ${style.card}`}>
            <Card.Img variant="top" src={props.producto.img} style={{height:"428px"}} className={style.img}/>
            <Card.Body>
                
                <Card.Title>{props.producto.name}</Card.Title>
                
                <Card.Text>
                    ${props.producto.price}
                </Card.Text>
                
                {props.shop ? <Button style={{width: "100%"}} onClick={remove} variant="danger"><AiOutlineDelete style={{fontSize:"20px"}}/></Button>:<Button style={{width: "100%"}} onClick={add}><MdAddShoppingCart style={{fontSize:"20px"}}/></Button>}
            </Card.Body>
        </Card>
    )
}


export default ProductCard;