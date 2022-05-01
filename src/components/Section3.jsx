import {Container} from "react-bootstrap";
import {ContainerSect3, ContTextSect3, ImgPrincipal2Sect3} from "../styles/StyledComponents";

import "../styles/index.css"


const Section3 = ()=> {
    return (
        <>
            <Container >    
                <ContainerSect3>
                    <ImgPrincipal2Sect3 src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/illustration-stay-productive_jn2483.png" alt="imagen principal2" />
                    <ContTextSect3>
                        <h2>Stay productive, wherever you are</h2>    
                        <p style={{marginTop:"5%"}}>
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        
                        <p>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                        </p>
                        <a href="/" style={{color: "var(--Cyan-inside-call-to-action-gradient)"}} >See how Fylo works <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421920/Fylo-LandingPage/icon-arrow_qo99k5.svg" alt="Icono" /></a>
                    </ContTextSect3>
                </ContainerSect3> 
            </Container>
        </>
    );
}
export default Section3;