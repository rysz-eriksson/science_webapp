import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';

import image from '../../images/building.jpg';

import crsStyles from './carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CustomCarousel = ({content}) => {
    return (
        <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={10}
            totalSlides={content.length}
        >
            <Slider className={crsStyles.slider}>
                {content.map((item, i) => {
                    return (
                        <Slide
                            key={item.key}
                            index={i}
                            className={crsStyles.slide}
                        >
                            <Image 
                                src={image}
                            />
                            <article>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </article>
                        </Slide>
                    )
                })}
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    )
}

export default CustomCarousel;