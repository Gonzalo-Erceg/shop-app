import Cards from "@snowpak/react-credit-cards"
import '@snowpak/react-credit-cards/es/styles-compiled.css'
import {Form,Container,Col,Row,Button,Modal} from "react-bootstrap"
import {useState} from "react"
import {Navigate, useNavigate} from "react-router-dom"

function Confirmacion(){
    const navegacion = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () =>{
        navegacion("/",{replace:true})
    };
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} style={{width:"100%"}} className="mt-5" >
          Realizar Compra
        </Button>
  
        <Modal show={show}>
          <Modal.Header >
            <Modal.Title>Pago Realizado</Modal.Title>
          </Modal.Header>
          <Modal.Body>Su pago fue resivido y procesado, muchas gracias!</Modal.Body>
          <Modal.Footer>
            
            <Button variant="primary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>)
}





function CreditCard(){
    const [state,setState] = useState({cvc:"",expiry:"",focused:"",name:"",number:""})
    const ChangeCredit=(e)=>{
        
        setState({
            ...state,
            [e.target.name] : e.target.value
            

        })
    }
    const isFocus = (e)=>{
        setState({
            ...state,
            focused:e.target.name
        })
    }
    
    return(

        <Container style={{width:"30rem"}} className="mt-5 pt-5">
        <Cards className="mb-4"
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focused}
            name={state.name}
            number={state.number}
        />
            <Form>
        
            <Form.Group className="mb-3" controlId="number">
                <Form.Label>Numero de tarjeta</Form.Label>
                <Form.Control type="text" maxLength={16} placeholder="Numero de tarjeta" onChange={ChangeCredit} name="number" onFocus={isFocus}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name" >
                <Form.Label>Nombre que aparece en la tarjeta</Form.Label>
                <Form.Control type="text" maxLength={30} onChange={ChangeCredit} name="name" onFocus={isFocus}/>

            </Form.Group>
            <Row>
                <Col>
                    <Form.Group controlId="expiry">
                        <Form.Label>Fecha de vencimiento</Form.Label>
                        <Form.Control type="text" maxLength={4} placeholder="fecha de vencimiento" name="expiry" onChange={ChangeCredit} onFocus={isFocus}/>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="cvc">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control type="text" maxLength={3} placeholder="codigo de seguridad" name="cvc" onChange={ChangeCredit} onFocus={isFocus}/>
                    </Form.Group>
                </Col>
            </Row>
            <Confirmacion/>
        </Form>
        </Container>
    )
}


export default CreditCard