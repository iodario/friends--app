import styled from "styled-components";

//le damos estilo al div, al que llamamos como EpisodeEl
export const EpisodeEl = styled.div`

    flex-grow: 1;    /*  son todos iguales */
    width: 400px;
    padding: 10px;

    img {
        width: 100%;        
    }

    p{ 
    text-align: justify;
    }
`;
