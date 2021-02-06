import React, { Component } from 'react';
import Slider from "react-slick";
import SliderImg from "../../img/SliderImg.png";

import styles from "./mainSlider.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function NextArrow(props) {
    const { className, style, onClick } = props;
    const arrowNext = <FontAwesomeIcon icon={faAngleRight} 
                        className={className}
                        onClick={onClick}  
                        style={{...style, width: '35px', height: '55px', 
                        color: '#fff', transform: 'translate(0px, -50%)'}}/>
    return (
        <>
            {arrowNext}
        </>
    );
}
  
function PrevArrow(props) {
    const { className, style, onClick } = props;
    const arrowPrev = <FontAwesomeIcon icon={faAngleLeft} 
                        className={className}
                        onClick={onClick}  
                        style={{...style, width: '35px', height: '55px', 
                        color: '#fff', transform: 'translate(45px, -50%)',
                        zIndex: '1'}}/>
    return (
        <>
            {arrowPrev}
        </>
    );
}

export default class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {

        const settingsFirstSlider = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            swipeToSlide: true,
            focusOnSelect: true,
          };

          const settingsSecondSlider = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            swipeToSlide: true,
            focusOnSelect: true,
            arrows: false,
            responsive: [
                {
                  breakpoint: 1100,
                  settings: {
                    slidesToShow: 4,
                  }
                }, {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
          };

        return (
            <div className={`${styles.MainSlider}`}>
                <div className={`${styles.wrapper}`}>

                    <Slider
                    {...settingsFirstSlider} 
                    className={`${styles.firstSlider}`}
                    asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    >
                        <img alt='Slider img' className={`${styles.firstSliderImages}`} src={`${SliderImg}`}/>
                        <img alt='Slider img' className={`${styles.firstSliderImages}`} src={`${SliderImg}`}/>
                        <img alt='Slider img' className={`${styles.firstSliderImages}`} src={`${SliderImg}`}/>
                        <img alt='Slider img' className={`${styles.firstSliderImages}`} src={`${SliderImg}`}/>
                        <img alt='Slider img' className={`${styles.firstSliderImages}`} src={`${SliderImg}`}/>

                    </Slider>

                    <Slider
                    {...settingsSecondSlider}
                    className={`${styles.secondSlider}`}
                    asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    >

                    <div className={`${styles.SlideDiv}`}>
                        <img alt='Slider' className={`${styles.secondSliderImages}`} src={`${SliderImg}`}/>
                    </div>   
                    <div className={`${styles.SlideDiv}`}>
                        <img alt='Slider' className={`${styles.secondSliderImages}`} src={`${SliderImg}`}/>
                    </div>  
                    <div className={`${styles.SlideDiv}`}>
                        <img alt='Slider' className={`${styles.secondSliderImages}`} src={`${SliderImg}`}/>
                    </div>  
                    <div className={`${styles.SlideDiv}`}>
                        <img alt='Slider' className={`${styles.secondSliderImages}`} src={`${SliderImg}`}/>
                    </div>  
                    <div className={`${styles.SlideDiv}`}>
                        <img alt='Slider' className={`${styles.secondSliderImages}`} src={`${SliderImg}`}/>
                    </div>  

                    </Slider>

                </div>
            </div>
        );
    }
}