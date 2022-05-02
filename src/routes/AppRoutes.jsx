// import { Container } from "react-bootstrap";
import NavBarP from "../components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";
import comillas from "../styles/comillas.png";
import Section5 from "../components/Section5";
import logo from "../styles/logo.svg";
import FooterP from "../components/Footer";

function App() {
  return (
    <>
        <NavBarP/>
        <Section1/>
        <Section2/>
        <Section3/>
        <img src={comillas} alt="Comillas" className="comillas"/>
        <Section4/>
        <Section5/>
        <img src={logo} alt="logo" className="logoFooter"/>
        <FooterP/>
    </>
  );
}

export default App;
