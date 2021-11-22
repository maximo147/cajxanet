import styled from "styled-components";
import {BsFillLightningFill} from "react-icons/bs";

const NosotrosStyles = styled.div`
    //border: 1px red solid;
    padding: 10px;
    text-align: center;
    width: 60%;
    margin: 0px auto;
    div{
        div{
            font-size: 30px;
            font-weight: 800;
        }
        p{
            font-size: 20px;
        }
        span{
            font-size: 60px;
        }
    }
    
`;

const Nosotros = () => {
    return (
        <NosotrosStyles>
            <div id="nosotros">
                <div>
                    Somos una empresa de desarrollo de software
                </div>
                <p>
                    Si tienes algun proyecto en mente, puedes contactarnos y gustosamente te podemos ayudar
                </p>
            </div>
            <div>
                <span>
                   <BsFillLightningFill /> 
                </span>
            </div>
        </NosotrosStyles>
    )
}

export default Nosotros;