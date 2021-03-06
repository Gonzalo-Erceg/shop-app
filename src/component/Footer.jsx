import {Container} from "react-bootstrap"

import style from "./footer.module.css"

function Footer(){
    return(
        <div className={`bg-dark ${style.footer} `}>
            <Container style={{color:"#fff"}} className="pt-2 d-flex flex-column align-items-center ">
                <p>esta pagina es estatica, por lo tanto no almacena ni registra ningun dato que ingreses</p>
                <span>App created by Gonzalo Erceg</span>
                <span><a href="https://github.com/Gonzalo-Erceg" target="__BLANK">Ir a mi Github</a></span>
            </Container>
        </div>
    )
}
export default Footer