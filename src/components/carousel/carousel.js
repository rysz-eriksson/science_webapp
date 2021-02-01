import React from 'react';

import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';

import image from '../../images/building.jpg';

import crsStyles from './carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';

const CustomCarousel = ({content}) => {
    return (
        <CarouselProvider
            naturalSlideWidth={8}
            naturalSlideHeight={5}
            totalSlides={content.length}
            isPlaying={true}
            interval={3000}
            infinite={true}
            className={crsStyles.carousel}
        >
            <Slider className={crsStyles.slider}>
                {content.map((item, i) => {
                    return (
                        <Slide
                            key={item.key}
                            index={i}
                            className={crsStyles.slide}
                        >
                            <article>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </article>
                            <Image 
                                src={image}
                            />
                        </Slide>
                    )
                })}
            </Slider>
            <DotGroup className={crsStyles.dotGroup}></DotGroup>
        </CarouselProvider>
    )
}

export default CustomCarousel;