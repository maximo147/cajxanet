import styled from "styled-components";
import Card from "./Card";
import { IoLogoAndroid, IoMdSearch, IoLogoHtml5 } from "react-icons/io";

const ServiciosStyles = styled.div`
    width: 80%;
    margin: 20px auto;
    text-align: center;
    center{
        font-size: 1.5rem;
        font-weight: bold;
        margin: 10px 0;
    }
    div{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
`;

const Servicios = () => {
    return (
        <ServiciosStyles>
            <center id="servicios">
                Nuestros Servicios
            </center>
            <div>
                <Card 
                    titulo="Desarrollo Web"
                    icono={<IoLogoHtml5 fill="#f00" />}
                />
                <Card 
                    titulo="Desarrollo de Apps"
                    icono={<IoLogoAndroid fill="#0f0" />}
                />
                <Card 
                    titulo="Consultoría SEO"
                    icono={<IoMdSearch fill="#00f" />}
                />
            </div>
        </ServiciosStyles>
    )
}

export default Servicios;