import styled from "styled-components";
// import {css} from "styled-components";
import { device } from "../helpers/mediaQuerys.js";

// const contenedorMixin = css`
// width: '18rem';
// display:flex;
// flex-direction:column;
// color: white;
// justify-content: center;
// align-items:center;
// ` 
// const buttonMixin = css` 
//     color: white;
//     font-size: 15px;
//     font-weight: 600;
//     padding: 15px 10px 15px 10px;
//     border:none;
//     border-color:var(--Cyan-inside-call-to-action-gradient);
//     border-radius: 50px;
//     background: var(--Blue-inside-call-to-action-gradient);
//     background: -webkit-linear-gradient(to right, var(--Cyan-inside-call-to-action-gradient), var(--Blue-inside-call-to-action-gradient));
//     background: linear-gradient(to right, var(--Cyan-inside-call-to-action-gradient), var(--Blue-inside-call-to-action-gradient) );
    
// `
// const flexMixin = css` 
// @media ${device.mobileGeneral}{
//         width: 80%;
//         margin-top: 5%;
//     }
// `
export const LogoImg = styled.img`
    @media ${device.mobileGeneral}{
    width:40%;
    }
`
export const ContainerSect1 = styled.div`
    color: white;
    text-align: center;
`
export const ContTextSect1 = styled.div`
    padding: 5% 20% 0% 20%;
    @media ${device.mobileGeneral}{
        padding: 5% 8% 0% 8%;
    }
`

    /* ${buttonMixin}; */
export const ButtonSect1 = styled.button`
    margin-top: 3%;
    width: 50%;

    @media ${device.mobileGeneral}{
        width: 70%;
    }

`

/* ${contenedorMixin}; */
export const CardCotene = styled.div`

margin:10% 20% 0% 20%;
text-align:center;
@media ${device.mobileGeneral}{
    margin:10% 10% 0% 10%;
    }
`
export const ImgOptions = styled.img`
width: 25%;
height: 25%;
margin-bottom: 5%;
`
export const ContainerSect3 = styled(ContainerSect1)`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin-top: 5%;
justify-content: center;
`
export const ImgPrincipal2Sect3 = styled.img`
    width: 60%;
    height: 40%;
@media ${device.mobileGeneral}{
    width: 80%;
    height: 40%;
    }
`
export const ContTextSect3 = styled.div`
    padding-top: 8%;
    width: 40%;
    text-align:start;
@media ${device.mobileGeneral}{
    margin: 5% 5% 5% 5% ;
    width: auto;
    font-size: 13px;
    }
`

// ${contenedorMixin};
export const CardContComent = styled.div` 


    background-color: var(--Dark-Blue-testimonials-background);
    margin:10% 10% 10% 10%;
    text-align:start;
    padding: 8% 5% 5% 3%;
    font-size:10px;
@media ${device.mobileGeneral}{
    margin:5% 10% 0% 10%;
    font-size:12px;
    padding: 8% 2% 5% 2%;
    }
`
export const ConteProfileGeneral = styled.div`
display :flex;
flex-direction:row;
background-color: var(--Dark-Blue-testimonials-background);
@media ${device.mobileGeneral}{
    width:100%;
    }
`
export const ImgProfile = styled.img`
margin-top: 2%;
width:12%;
height: 12%;
border-radius: 50%;
`
export const ConteSect5 = styled.div`
    margin: 15% 12% 10% 12%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
export const ContSect5FindBoton = styled.div`
    display:flex;
    flex-direction:row;
    width: 100%;
`
export const FormInput = styled.form` 
    display:flex;
    flex-direction:row;
    width: 100%;
    height: 80%;
@media ${device.mobileGeneral}{
    flex-wrap:wrap;
    width: 100%;
    }

`
export const InputSend = styled.input` 
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:white;
    color: gray;
    border-radius: 40px;
    padding:3%;
    margin-right: 5%;
    width: 70%;
    height: 30px;
    @media ${device.mobileGeneral}{
        width: 100%;
        padding: 20px;
        text-align:center;
        margin-right: 0%;
    }

`
// ${buttonMixin};
export const Button2 = styled.button` 
    width: 30%;
    height: 75%;
    @media ${device.mobileGeneral}{
        width: 100%;
        padding: 10px;
        margin-top: 5%;
    }
`
export const ContainerFooter = styled.div` 
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5%;
    width: 100%;
    color: white;
@media ${device.mobileGeneral}{
    flex-direction: column;
    width: 100%;
    }
`
    // ${flexMixin};
export const Location = styled.div` 
    display:flex;
    flex-direction: row;
    width: 25%;
    font-size: 12px;


`

// ${flexMixin};
export const Contacto = styled.div`
    width: 22%;
    font-size: 12px;
    
`

// ${flexMixin};
export const About = styled.div`
    width: 17.5%;
    list-style: none;
    
`

    // ${flexMixin};
export const ContactUs = styled.div`
    width: 17.5%;

`

    // ${flexMixin};
export const Icons = styled.div`
    display:flex;
    justify-content: space-evenly;
    width: 18%;

`
