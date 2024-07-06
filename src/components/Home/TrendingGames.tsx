import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { TrendingGamesList } from '../../data/DataTrendingG.ts'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const TrendingGames = () => {

    const getInitialSlidePerView = () => {
        const storedValue = localStorage.getItem('slidePerView');
        return storedValue ? parseInt(storedValue, 10) : window.innerWidth < 720 ? 1 : 3;
    };

    const [slidePerView, setSlidePerView] = useState(getInitialSlidePerView)


    useEffect(() => {
        const handlerResize = () => {
            const newSlidePerView = window.innerWidth < 720 ? 1 : 3;
            setSlidePerView(newSlidePerView);
            localStorage.setItem('slidePerView', newSlidePerView.toString());
        };

        window.addEventListener('resize', handlerResize);

        return () => {
            window.removeEventListener('resize', handlerResize);
        };
    }, []);

    return (
        <div className="Games-Trending">

            <div className="bg-DarkGray h-14 text-white flex items-center justify-center lg:h-24">
                <h1 className='text-lg font-bold '>Discounted games</h1>
            </div>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={slidePerView}
                pagination
                navigation
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                className='sm:h-60 lg:h-96 h-48 w-full bg-black'

            >
                {TrendingGamesList.map((games, index) => (
                    <SwiperSlide key={index}>
                        <Link to={`/games/checkin/${games.id}`}>
                            <img src={games.src} alt="Slider" className='w-full h-full ' />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default TrendingGames