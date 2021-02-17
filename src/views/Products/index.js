import React from 'react'
import Subscribe from '../../components/app-subscribe/index'
import Brands from '../../components/app-brands/index'
import NavigationProductsView from '../../components/app-navigation/app-navigation-products-view/index'
import ProductSection from '../../components/app-product-section/index'
import AppProductReview from '../../components/app-product-reviews/index'
import ProductYouMayAlsoLike from '../../components/app-you-may-also-like/index'
import RelatedProducts from '../../components/app-related-products/index'
import ShippingDark from '../../components/app-shipping-grid-dark/index'

export default function Index() {
    return (
        <div>

            <NavigationProductsView></NavigationProductsView>
            <ProductSection></ProductSection>
            <AppProductReview></AppProductReview>
            <ShippingDark></ShippingDark>
            <ProductYouMayAlsoLike></ProductYouMayAlsoLike>
            <RelatedProducts></RelatedProducts>
            <Subscribe></Subscribe>
            <Brands></Brands>
            
        </div>
    )
}
