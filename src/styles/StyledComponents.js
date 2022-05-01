import styled, {css} from "styled-components";
import { device } from "../helpers/mediaQuerys.js";


const contenedorMixin = css`
width: '18rem';
display:flex;
flex-direction:column;
color: white;
justify-content: center;
align-items:center;
` 
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
export const ButtonSect1 = styled.button`
    margin-top: 3%;
    width: 40%;
    color: white;
    font-size: 15px;
    font-weight: 600;
    padding: 15px 10px 15px 10px;
    border:none;
    border-color:var(--Cyan-inside-call-to-action-gradient);
    border-radius: 50px;
    background: var(--Blue-inside-call-to-action-gradient);
    background: -webkit-linear-gradient(to right, var(--Cyan-inside-call-to-action-gradient), var(--Blue-inside-call-to-action-gradient));
    background: linear-gradient(to right, var(--Cyan-inside-call-to-action-gradient), var(--Blue-inside-call-to-action-gradient) );
    @media ${device.mobileGeneral}{
        width: 70%;
    }

`
export const CardCotene = styled.div`
${contenedorMixin}
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
export const CardContComent = styled.div` 
${contenedorMixin}
background-color: var(--Dark-Blue-testimonials-background);
margin:10% 10% 10% 10%;
text-align:start;
padding: 8% 5% 5% 3%;
font-size:10px;
border: 1px dashed red;
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



// border: 1px dashed red;