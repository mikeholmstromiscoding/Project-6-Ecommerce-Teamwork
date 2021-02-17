import React, { useEffect } from "react";
import Product from "../app-product/";
import YouMayAlsoLikeHeader from "../app-section-headers/you-may-also-like/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./index.css";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/products";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Index() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const params = {
    pagination: {
      el: "#swiper-like-pagination",
      type: "bullets",
      clickable: true,
      centeredSlides: true,
    },
    navigation: {
      nextEl: "#swiper-like-button-next",
      prevEl: "#swiper-like-button-prev",
    },
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      // when window width is >= 100px
      100: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 990px
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
  return (
    <div className="app-you-may-also-like">
      <YouMayAlsoLikeHeader></YouMayAlsoLikeHeader>
      <div className="container position-relative">
        <Swiper {...params}>
          {/* <SwiperSlide>
            <Product1 tag={"hot"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 tag={"sale"} className="product-background" />
          </SwiperSlide>
          <SwiperSlide>
            <Product1 className="product-background" />
          </SwiperSlide> */}

          {products.map((p) => {
            return (
              <SwiperSlide key={p._id} className={"product-swiper"}>
                <Product
                  key={p._id}
                  tag={"hot"}
                  product={p}
                  className="product-background"
                />
              </SwiperSlide>
            );
          })}

        </Swiper>

        <div className="swiper-button-prev" id="swiper-like-button-prev"></div>
        <div className="swiper-button-next" id="swiper-like-button-next"></div>
        <div className="container-pagination mb-5">
          <div
            className="swiper-pagination mb-5"
            id="swiper-like-pagination"
          ></div>
        </div>
      </div>
    </div>
  );
}
