"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Mousewheel, EffectFade } from 'swiper/modules';

import { useAppStore } from '@/store/app-store';
import IndexTrendsSlide from './IndexTrendsSlide';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import styles from './IndexTrends.module.scss'

const PLAY_LIST_ID = "top-music-trends-playlist"

const IndexTrends = ({
    trendsInfo
}: {
    trendsInfo: Music[]
}) => {

    const music = useAppStore((state) => state.currentMusic)
    const setMusic = useAppStore((state) => state.setMusic)
    const setPlaylist = useAppStore((state) => state.setPlaylist)
    const playlistId = useAppStore((state) => state.playListId)


    const playMusicClickHandler = (music: Music) => {
        setMusic(music)
        if (playlistId !== PLAY_LIST_ID) {
            setPlaylist(PLAY_LIST_ID, trendsInfo)
        }
    }

    return (
        <Swiper
            className={`${styles.slider} trend-slider`}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            effect={'fade'}
            pagination={{
                clickable: true,
            }}
            direction={'vertical'}
            navigation={true}
            mousewheel={true}
            modules={[Autoplay, Pagination, Navigation, Mousewheel, EffectFade]}
        >
            {
                trendsInfo.map(trendInfo => (
                    <SwiperSlide key={trendInfo.id}>
                        <IndexTrendsSlide key={trendInfo.id} music={music} trendInfo={trendInfo} onMusicClick={playMusicClickHandler}></IndexTrendsSlide>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default IndexTrends