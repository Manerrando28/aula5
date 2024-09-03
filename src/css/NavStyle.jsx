import styled from "styled-components";

export const NavStyle = styled.header `

.nav{
    grid-area:nav;
    background:#00ffff;
}

.nav .container{
    display:flex;
    padding: 30px 40px;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:70px;
}
.nav .logo{
    font-size:2rem;
    font-weight:700;
    transition: 0.5s;
}
.nav .logo:hover{
    color:red;
}
.nav ul .navLink{
    font-size:1rem;
    font-weight:700;
    text-transform:uppercase;
    padding:10px 20px;
}



`