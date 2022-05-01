import {Row, Col} from "react-bootstrap";
import "../styles/index.css"
import {CardCotene, ImgOptions} from "../styles/StyledComponents";

const Section2 = ()=> {

    const listg = [
        {
            id: 1,
            title: 'Access your files, anywhere',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421918/Fylo-LandingPage/icon-access-anywhere_uc8615.svg',
            description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
        },
        {
            id: 2,
            title: 'Security you can trust',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421920/Fylo-LandingPage/icon-security_nnxttl.svg',
            description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
        },
        {
            id: 3,
            title: 'Real-time collaboration',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421919/Fylo-LandingPage/icon-collaboration_hcdqum.svg',
            description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
        },
        {
            id: 4,
            title: 'Store any type of file',
            imgUrl: 'https://res.cloudinary.com/docutv7ug/image/upload/v1651421918/Fylo-LandingPage/icon-any-file_cunpo6.svg',
            description: 'Whether you´re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
        }
    ];
    
    return (
        <>

            <Row xs={1} md={2} className="g-4">
            {listg.map((list, idx) => (
                <Col key={list.id + idx}>
                <CardCotene>
                    <ImgOptions src={list.imgUrl} alt="Imagenes de opciones" />
                    <div>
                    <h3>{list.title}</h3>
                    <p>
                    {list.description}
                    </p>
                    </div>
                </CardCotene>
                </Col>
            ))}
            </Row>
        </>
    );
}
export default Section2;