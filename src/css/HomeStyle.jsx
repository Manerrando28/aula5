import styled from "styled-components";

export const HomeStyle =styled.section`

.home{
    grid-area:home;
    height:100vh;
    display:flex;
    background-size:cover;
    background-image:url(src/assets/Carro.png);
    justify-content:center;
    align-items:center;
}

.home h1{
    color:yellow;
    font-size:3rem;
    font-weight:800;
    animation: efeito 1.7s infinite alternate;
}

@keyframes efeito{
    0%{
        transform:scale(1.1);
    }
    100%{
        transform:scale(.80,0.80)
    }
}


`