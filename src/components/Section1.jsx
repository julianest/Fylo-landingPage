import {Container} from "react-bootstrap";
import {ContainerSect1, ContTextSect1, ButtonSect1} from "../styles/StyledComponents";
import "../styles/index.css"


const Section1 = ()=> {
    return (
        <>
            <Container >    
                <ContainerSect1>
                    <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421921/Fylo-LandingPage/illustration-intro_empcsm.png" className="imgMain" alt="imagen principal" />
                    <ContTextSect1>
                        <h1>All your files in one secure location, accessible anywhere.</h1>    
                        <p style={{marginTop:"5%"}}>
                            Fylo stores all your most important files in one secure location. Access them wherever 
                            you need, share and collaborate with friends family, and co-workers.
                        </p>
                        <ButtonSect1>Get Started</ButtonSect1>
                    </ContTextSect1>
                </ContainerSect1> 
            </Container>
        </>
    );
}
export default Section1;