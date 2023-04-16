import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import sl1 from '../images/slider-scales.jpg';
import sl2 from '../images/slider-scale.jpg';
import sl3 from '../images/slider-badging.jpg';
import sl4 from '../images/slider-badag.jpg';

const ImgSlider = (props) => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
        arrows: true
    };

    return (
    
         <Carousel {...settings}>
             <Wrap>
                <a>
                    <img src={sl1}/>
                </a>
             </Wrap>
             <Wrap>
                <a>
                    <img src={sl2} />
                </a>
             </Wrap>
             <Wrap>
                <a>
                    <img src={sl3} />
                </a>
             </Wrap>
             <Wrap>
                <a>
                    <img src={sl4} />
                </a>
             </Wrap>
         </Carousel>
    
    )
}

const Carousel = styled(Slider)`
    margin-top: 20px;
    padding: 20px;
    

    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover{
            opacity: 1;
            transition: opacity 0.2s ease 0s;
        }
    }

    ul li button {
        &:before{
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list{
        overflow: initial;
    }

    .slick-prev {
        left: -40px;
    }

    .slick-next {
        right: -40px;
    }

`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a{
        border-radius: 4px;
        position: relative;
        display: block;
        padding: 4px;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    }

    img{
        height: 100%;
        width: 100%;
    }

    &:hover{
        padding: 0;
        border:4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 300ms;
    }

`;


export default ImgSlider;