import React from 'react'
import './index.css'
import AppBlogItem from './app-blog-item/index'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import BlogHeader from '../app-section-headers/latest-blog'

SwiperCore.use([Navigation, Pagination, Autoplay]);


export default function Index() {
    const params = {
        pagination: {
            el: '#swiper-pagination-blog',
            type: 'bullets',
            clickable: true,
            centeredSlides: true
        },
        navigation: {
            nextEl: '#swiper-button-next-blog',
            prevEl: '#swiper-button-prev-blog'
        },
        spaceBetween: 30,
        slidesPerView: 3,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            // when window width is >= 100px
            100: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 40
            }
          }
        }
    return (
            <div className="app-latest-blog">
                <BlogHeader/>
                <div className="container position-relative">

                    <Swiper
                        {...params}
                        >
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                        <SwiperSlide><AppBlogItem></AppBlogItem></SwiperSlide>
                    </Swiper>
                        <div className="swiper-button-prev" id="swiper-button-prev-blog"></div>
                        <div className="swiper-button-next" id="swiper-button-next-blog"></div>
                    <div className="container-pagination">
                        <div className="swiper-pagination" id="swiper-pagination-blog"></div>
                    </div>
                </div>

            </div>
    )
}
