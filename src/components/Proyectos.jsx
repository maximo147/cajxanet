
import styled from "styled-components";

const ProyectosStyles = styled.div`
    //border: 1px solid black;
    margin: 0 auto;
    width: 100%;
    background-color: #ebebeb;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 30px 200px;
    &:nth-child(1) div{
        background-color: red;
    }
    div{
        display: block;
    }
`;

const ProyectoStyles = styled.div`
    width: 250px;
    border: 1px solid #414141;
    border-radius: 15px;
    cursor: pointer;
    margin: 15px auto;
    text-align: justify;
    transition: all 350ms ease-out;
    //box-shadow: 2px 10px 15px #747474;
    &:hover{
        transform: scale(1.01);
    }
    main{
        
        max-width: 100%;
        min-width: 200px;
        min-height: 210px;
        max-height: 210px;
        background-color: #0e0e4f;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
    }
    div{
        padding: 15px;
    }
    /* button{
        margin-top: 10px;
        border: none;
        background-color: #6f1d3d;
        border-radius: 10px;
        padding: 6px;
        width: 100%;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
    } */
`;

const Proyecto = () => {
    const hola = () => {
        alert('holaaa');
    }
    return (
        <ProyectoStyles id="proyectos">
            <main>
                Imagen
            </main>
            <div>
                <h4>
                    Titulo
                </h4>
                <section>
                    HTML - JAVASCRIPT - CSS - SASS
                </section>
                <footer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum optio veritatis quibusdam omnis, rem officia nisi quaerat sequi, nesciunt, nihil a explicabo ullam.
                </footer>
            </div>
            {/* <button onClick={hola}>Holi</button> */}

        </ProyectoStyles>
    )
}


const Proyectos = () => {
    return (
        <ProyectosStyles>
            
            <Proyecto/>
            <Proyecto/>
            <Proyecto/>
        </ProyectosStyles>
    )
}

export default Proyectos;