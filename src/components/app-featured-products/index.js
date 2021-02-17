import React, { useEffect } from "react";
import "./index.css";
import Products from "../app-product/";
import FeaturedProducts from "../app-section-headers/featured-products/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/swiper.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/products";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Featuredproducts({ handleOpenModal }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const params = {
    pagination: {
      el: "#swiper-pagination-featured",
      type: "bullets",
      clickable: true,
      centeredSlides: true,
    },
    navigation: {
      nextEl: "#swiper-products-button-next-featured",
      prevEl: "#swiper-products-button-prev-featured",
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
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  };
  return (
    <div className="app-featured-products">
      <FeaturedProducts></FeaturedProducts>
      <div className="container position-relative">
        <Swiper {...params}>
          {/* <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"sale"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"hot"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeaturedProduct tag={"sale"} className="product-background" handleOpenModal={handleOpenModal}/>
                    </SwiperSlide> */}

          {products.map((p) => {
            return (
              <SwiperSlide key={p._id} className={"product-swiper"}>
                <Products
                  key={p._id}
                  tag={"hot"}
                  product={p}
                  className="product-background"
                  handleOpenModal={handleOpenModal}
                />
              </SwiperSlide>
            );
          })}

 
        </Swiper>
        <div
          className="swiper-button-prev"
          id="swiper-products-button-prev-featured"
        ></div>
        <div
          className="swiper-button-next"
          id="swiper-products-button-next-featured"
        ></div>
        <div className="container-pagination">
          <div
            className="swiper-pagination"
            id="swiper-pagination-featured"
          ></div>
        </div>
      </div>
    </div>
  );
}
