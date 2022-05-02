import {About, Contacto, ContactUs, ContainerFooter, Location, Icons} from "../styles/StyledComponents";
import {Container} from "react-bootstrap";


const FooterP = ()=> {
    return (

        <>
        <Container>
            <ContainerFooter>

                <Location>
                    <div className="iconLocation">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421920/Fylo-LandingPage/icon-location_vcqxaa.svg" alt="icon location" />
                    </div>
                    <div className="textLocation" style={{marginLeft:"5px"}} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua
                    </div>
                </Location>
                <Contacto>
                    <div className="tel">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421920/Fylo-LandingPage/icon-phone_tew599.svg" alt="icono telefono" />
                        <span style={{marginLeft:"5px"}} >+1-543-123-4567</span>
                    </div>
                    <br />
                    <div className="correo">
                        <img src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421919/Fylo-LandingPage/icon-email_o4xxeh.svg" alt="Icono correo"/>
                        <span style={{marginLeft:"5px"}} >example@fylo.com</span>
                    </div>
                </Contacto>
                <About>
                    <ul style={{listStyle: "none"}}>
                        <a href="/" className="listItems"><li>About Us</li></a>
                        <a href="/" className="listItems"><li>Jobs</li></a>
                        <a href="/" className="listItems"><li>Press</li></a>
                        <a href="/" className="listItems"><li>Blog</li></a>
                    </ul>
                </About>
                <ContactUs>
                    <ul style={{listStyle: "none"}}>
                        <a href="/" className="listItems"><li>Contact Us</li></a>
                        <a href="/" className="listItems"><li>Terms</li></a>
                        <a href="/" className="listItems"><li>Privacy</li></a>
                    </ul>
                </ContactUs>
                <Icons>
                        <a href="/"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484023/Countdown/icon-facebook_u6e6qi.svg" alt="icono Facebook"/></a>
                        <a href="/"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484023/Countdown/icon-instagram_uvzvmu.svg" alt="icono Instagram"/></a>
                        <a href="/"><img src="https://res.cloudinary.com/docutv7ug/image/upload/v1650484022/Countdown/icon-pinterest_ikeukc.svg" alt="icono Pinterest"/></a>
                        
                </Icons>
            </ContainerFooter>
        </Container>
        </>
    );
}
export default FooterP;