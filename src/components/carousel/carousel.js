import React from 'react';
import {navigate} from 'gatsby'

import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';

import crsStyles from './carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';


const CustomCarousel = ({content}) => {
    const handleOnClick = (path) => {
        if (typeof window !== 'undefined') {
            console.log(path)
            navigate(`/${path}`)
        }
    }

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
                                    <h2
                                        onClick={(() => { handleOnClick(item.title.en)})}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.title.pl}
                                    </h2>
                                    <p
                                        onClick={(() => { handleOnClick(item.title.en)})}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {item.description}
                                    </p>
                                    <div className={crsStyles.buttons}>
                                        <ButtonBack />
                                        <ButtonNext />
                                    </div>
                                </article>
                            </section>
                            <Image 
                                src={item.image}
                                //isBgImagea={true}
                                className={crsStyles.image}
                            />
                        </Slide>
                    )
                })}
            </Slider>

        </CarouselProvider>
    )
}

export default CustomCarousel;