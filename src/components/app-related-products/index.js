import React, { useEffect } from "react";
import Product from "../app-product/";
import RelatedProductsHeader from "../app-section-headers/related-products/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "./index.css";

import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/swiper.scss";
import { getProducts } from "../../store/actions/products";
import { useDispatch, useSelector } from "react-redux";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Index() {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const params = {
    pagination: {
      el: "#swiper-related-pagination",
      type: "bullets",
      clickable: true,
      centeredSlides: true,
    },
    navigation: {
      nextEl: "#swiper-related-button-next",
      prevEl: "#swiper-related-button-prev",
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
      990: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  };
  return (
    <div className="app-related-products-header">
      <RelatedProductsHeader></RelatedProductsHeader>
      <div className="container position-relative">
        <Swiper {...params}>
          
          {/* <SwiperSlide><Product1 tag={"hot"} className="product-background" /></SwiperSlide>
                    <SwiperSlide><Product1 className="product-background" /></SwiperSlide>
                    <SwiperSlide><Product1 tag={"sale"} className="product-background" /></SwiperSlide>
                    <SwiperSlide><Product1 className="product-background" /></SwiperSlide> */}

          {products.map((p) => {
            return (
              <SwiperSlide key={p._id} className={"product-swiper"}>
                <Product
                  key={p._id}
                  tag={"new"}
                  product={p}
                  className="product-background"
                />
              </SwiperSlide>
            );
          })}

        </Swiper>
        <div
          className="swiper-button-prev"
          id="swiper-related-button-prev"
        ></div>
        <div
          className="swiper-button-next"
          id="swiper-related-button-next"
        ></div>
        <div className="container-pagination mb-5">
          <div
            className="swiper-pagination mb-5"
            id="swiper-related-pagination"
          ></div>
        </div>
      </div>
    </div>
  );
}
