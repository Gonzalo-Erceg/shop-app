import {Nav, Navbar, Container, NavDropdown, Button} from "react-bootstrap"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {Link} from "react-router-dom"
import style from "./NavBar.module.css"
import {useSelector,useDispatch} from "react-redux"

function Login(props){
    return(
        <NavDropdown title={props.islogin.name} id="basic-nav-dropdown">
            <NavDropdown.Item><Button variant="link" className="dropdown-item" onClick={()=>{props.setislogin(state=>{return false})}}>Cerrar sesion</Button></NavDropdown.Item>
        </NavDropdown>
    )
}
function NoRes(props){
    const state = useSelector(state=>state)
    return(
         <>
         <NavDropdown title="Productos" id="basic-nav-dropdown">
                        <Link to="/productos/remera" className="dropdown-item">Remeras</Link> 
                        <Link to="/productos/pantalon" className="dropdown-item">Pantalones</Link>
                        <Link to="/productos/zapatilla" className="dropdown-item">Zapatillas</Link>
                        
                    </NavDropdown>
                        {!props.islogin.login ? <Link to="/SignIn" className="nav-link"> Ingresar</Link>:<Login setislogin={props.setislogin} islogin={props.islogin}/>}
                    <Link to="/ShoppingCart" className="nav-link"><AiOutlineShoppingCart /><sup >{state.length}</sup></Link>
         </>

    )
}



function NavBar(props){
    const state = useSelector(state=>state)
    console.log(props.islogin)
    return(
        <Navbar bg="dark" variant="dark" fixed="top">
            <Container className={style.container}>
            
            <Navbar.Brand><Link to="/" className="navbar-brand">SHOP PAGE</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav >
                   <NoRes setislogin={props.setislogin} islogin={props.islogin} />
                    
                </Nav>
                
            </Navbar.Collapse>
           
            </Container>
           
        </Navbar>
    )
}


export default NavBar