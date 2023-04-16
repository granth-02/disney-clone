import styled from "styled-components";
import star from '../images/viewers-starwars.png';
import pix from '../images/viewers-pixar.png';
import nat from '../images/viewers-national.png'
import mar from '../images/viewers-marvel.png';
import dis from '../images/viewers-disney.png'

const Viewers = (props) => {
    return(
        <Container>
            <Wrap>
                <img src={star} />
            </Wrap>
            <Wrap>
                <img src={pix} />
            </Wrap>
            <Wrap>
                <img src={nat} />
            </Wrap>
            <Wrap>
                <img src={mar} />
            </Wrap>
            <Wrap>
                <img src={dis} />
            </Wrap>
        </Container>
    );
}


const Container = styled.div`
    margin-top: 30px;
    padding: 40px 10px 36px;
    display: grid;
    grid-gap: 30px;
    gap: 30px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 769px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border: 3px solid rgba(249, 249, 249, 0.1);

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
    }

`;


export default Viewers;