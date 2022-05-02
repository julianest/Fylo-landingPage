import "../styles/index.css"
import {ConteSect5, Button2, ContSect5FindBoton, FormInput, InputSend} from "../styles/StyledComponents";

const Section5 =()=> {

return (
    <>
        <ConteSect5>
            <h3>Get early access today</h3>
            <p style={{padding: "10px 40px 10px 40px", fontSize:"0.8em", textAlign:"center"}}>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <ContSect5FindBoton>
            <FormInput action="/" target="_blank" >
                <InputSend className="inputSend" type="email" placeholder="email@example.com" />
                <Button2>Get Started for Free</Button2>
            </FormInput>
                
            </ContSect5FindBoton>    
        </ConteSect5>
    </>
    )
}
export default Section5;
