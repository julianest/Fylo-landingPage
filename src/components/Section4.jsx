import {Row, Col} from "react-bootstrap";
import "../styles/index.css"
import {CardContComent, ImgProfile, ConteProfileGeneral} from "../styles/StyledComponents";

const Section4 =()=> {

    const listg = [
        {
            id: 1,
            description: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-1_zr00sb.jpg',
            name: 'Satish Patel',
            charge: "Founder & CEO, Huddle"
        },
        {
            id: 2,
            description: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-2_eihrlc.jpg',
            name: 'Bruce McKenzie',
            charge: "Founder & CEO, Huddle"
        },
        {
            id: 3,
            description: 'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421922/Fylo-LandingPage/profile-3_hvihb6.jpg',
            name: 'Iva Boyd',
            charge: "Founder & CEO, Huddle"
        }
    ];
return (
    
            <Row xs={1} md={3} className="g-1">
            {listg.map((list, idx) => (
                <Col key={list.id + idx}>
                <CardContComent>
                    <p>
                    {list.description}
                    </p>
                    <ConteProfileGeneral>
                    <ImgProfile src={list.imgUrl} alt="Imagenes de Personas" />
                        <div>
                            <span style={{border: "1px dashed red", fontSize:"1em"}}>{list.name}</span>
                            <br />
                            <span style={{border: "1px dashed red", fontSize:"0.8em"}}>{list.charge}</span>
                        </div>

                    </ConteProfileGeneral>
                    
                </CardContComent>
                </Col>
            ))}
            </Row>





    )

}
export default Section4;
