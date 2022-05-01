import {Navbar, Container, Nav} from "react-bootstrap";
import {LogoImg} from "../styles/StyledComponents";


const NavBarP = ()=> {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Nav.Link to="/" ><LogoImg src="https://res.cloudinary.com/docutv7ug/image/upload/v1651421920/Fylo-LandingPage/logo_rlu0w3.svg" alt="Logo"/></Nav.Link>
                    <Nav className="me-end">
                            <Nav.Link href="#home" className="ItemsNav">Featured</Nav.Link>
                            <Nav.Link href="#features" className="ItemsNav">Team</Nav.Link>
                            <Nav.Link href="#pricing" className="ItemsNav">Sign in</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBarP;