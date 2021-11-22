import styled from "styled-components";

const CardStyles = styled.div`
    width: 30%;
    border: 1px solid yellow;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    /* div{
        width: 100%;
        font-weight: bold;
        font-size: 23px;
        border: 1px solid red;
    } */
    main{
        width: 100%;
        display: flex;
        justify-content: center;
        div{
            margin: 10px 0;
            width: auto;
            text-align: center;
            border: 1px solid red;
            font-size: 5em;
        }
    }
    p{
        text-align: justify;
        font-size: 16px;
    }
`;

const Card = (props) => {
    return(
    <CardStyles>
        <center>
   
            {props.titulo}

        </center>
        <main>
            <div>
                {props.icono}
            </div>
        </main> 
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum optio veritatis quibusdam omnis, rem officia nisi quaerat sequi, nesciunt, nihil a explicabo ullam.
        </p>
    </CardStyles>
    )
}

export default Card;