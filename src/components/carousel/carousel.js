import React from 'react';

import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';

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
                            <section>
                                <article>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <div className={crsStyles.buttons}>
                                        <ButtonBack />
                                        <ButtonNext />
                                    </div>
                                </article>
                            </section>
                            <Image 
                                src={item.image}
                            />
                        </Slide>
                    )
                })}
            </Slider>

        </CarouselProvider>
    )
}

export default CustomCarousel;