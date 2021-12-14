import {Form,Container, Button} from "react-bootstrap"
import style from "./SignIn.module.css"
import {useNavigate} from "react-router-dom"
function SignIn(props){
    const navigate = useNavigate()
    const accion=(e)=>{
        e.preventDefault();
        const Value = e.target.name.value
        console.log(Value)
        if(Value.length>= 4 && Value.length <=10){
            props.islogin((state)=>{return {name: Value ,login:true}})
            navigate("/",{replace:true})
        }
    }
    return(
        <Container  className={`mt-5 border border-3 p-4 ${style.container}`}>
            <Form onSubmit={accion}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="text" maxLength="7" minLength="4" placeholder="Ingrese su Usuario" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña"/>
            </Form.Group>
            <Button style={{width:"100%"}} type="submit" variant="warning">Iniciar sesion</Button>
            </Form>
        </Container>
    )

}

export default SignIn