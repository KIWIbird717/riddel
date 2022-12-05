import { Swiper, SwiperSlide } from 'swiper/react';
import { StartCollectionProps } from './StartCollection.props';

import styles from './StartCollection.module.scss';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

const slides = [
  {
    img: '/bike/1.png',
    name: 'Riddel #3213',
    href: '',
  },
  {
    img: '/bike/2.png',
    name: 'Riddel #4923',
    href: '',
    route: 'collection',
  },
  {
    img: '/bike/3.png',
    name: 'Riddel #3237',
    href: '',
  },
  {
    img: '/bike/4.png',
    name: 'Riddel #3235',
    href: '',
  },
  {
    img: '/bike/5.png',
    name: 'Riddel #3236',
    href: '',
  },
];

const { box, bike, text, filter } = styles;

import { Grid } from '../../Atoms/Grid/Grid';
import { useEffect, useState } from 'react';
import { SwiperComponent } from 'swiper/types/shared';
export const StartCollection = ({ ...props }: StartCollectionProps): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const [slider, setSlider] = useState<SwiperComponent>();
  useEffect(() => {
    console.log('mounted');
    setMounted(true);
  }, []);

  const loadedData = () => {
    console.log('loaded');
    localStorage.setItem('loading', 'true');
  };


  return (
    <Grid centerX centerY style={{ width: '100%', height: '100%' }} {...props}>
            <div className='mouse'>

            </div>
      <div id='imgbike' className={box}>
        {mounted ? (
          <Swiper
            onInit={(swiper) => {
              setSlider(swiper);
            }}
            style={{ marginLeft: 'calc(var(--index) * 2)', height: '85%', width: '35vw' }}
            direction={'vertical'}
            spaceBetween={6}
            slidesPerView={2.5}
            onSlideChange={() => console.log(slider)}>
            {slides.map(({ img, name, href }) => {
              return (
                <SwiperSlide key={name}>
                  <div>
                    <Grid >
                      <img  id={'video'} onLoadedData={() => loadedData()} className={bike} src={img} alt={'Riddel'} />
                      <div className={filter} />
                    </Grid>
                    <Grid style={{ marginTop: 'calc(var(--index) * 0.5)' }} onStart centerX>
                      <a className={text} style={{ textDecoration: 'none' }} href={href}>
                        {name}
                      </a>
                      <img
                        style={{ marginLeft: 'calc(var(--index) * 0.7)', width: 'calc(var(--index) * 1)' }}
                        src={'../arrow.svg'}
                        alt={'arrow'}
                      />
                    </Grid>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : undefined}
      </div>
    </Grid>
  );
};