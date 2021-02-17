import React from "react";

import Banner from '../../components/app-banner/index'
import DiscountBanner from '../../components/app-discount-banner'
import FlashSaleBanner from '../../components/app-flash-sale-banner'
import Subscribe from '../../components/app-subscribe/index'
import AppReviews from '../../components/app-reviews/index'
import ShopCategory from "../../components/app-shop-category/index";
import Brands from "../../components/app-brands";
import TopSeller from "../../components/app-topp-sellers";
import AppLatestBlog from "../../components/app-latest-blog/index";
import AppFeaturedProducts from '../../components/app-featured-products/index'
import AppShippingGrid from '../../components/app-shipping-grid/index'

import NewArivalsCarousel from "../../components/app-new-arrivals-carousel";

export default function Home({handleOpenModal}) {
  return (
    <div>
      <Banner></Banner>
      <AppShippingGrid></AppShippingGrid>
      <ShopCategory></ShopCategory>
      <NewArivalsCarousel handleOpenModal={handleOpenModal}></NewArivalsCarousel>
      <DiscountBanner></DiscountBanner>
      <AppFeaturedProducts handleOpenModal={handleOpenModal}></AppFeaturedProducts>
      <FlashSaleBanner />
      <TopSeller handleOpenModal={handleOpenModal}/>
      <AppReviews></AppReviews>
      <AppLatestBlog></AppLatestBlog>
      <Subscribe></Subscribe>
      <Brands></Brands>
    </div>
  );
}
