import styled from 'styled-components'
import bgimage from '../images/login-background.jpg';
import ctalog from '../images/cta-logo-one.png';
import ctalog_ from '../images/cta-logo-two.png'


const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALog1 src={ctalog} />
                    <SignUp>Sign Up Here</SignUp>
                    <Description>
                        Get Premier Access to Puss In Boots for an additional fee with a Disney+ subscription. 
                        As of 06/9/23, the price of Disney+ and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALog2 src={ctalog_} />
                </CTA>
                <BgImg />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImg = styled.div`
    height: 100%;
    background-image: url(${bgimage});
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;

const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
`;

const CTALog1 = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 90%;

`;

const SignUp = styled.a`
    font-weight: bold;
    color: white;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }


`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 15px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;

`;

const CTALog2 = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 90%;
    
`;

export default Login;