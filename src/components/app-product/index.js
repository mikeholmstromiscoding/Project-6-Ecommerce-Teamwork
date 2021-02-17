import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import "./shop-styles.css";
import Boxim from "../../assets/img/brands/Bexim.png";
import Product1 from "../../assets/img/product-img/product-1.png";
import ReactTooltip from "react-tooltip";
import Ellipses from "../../assets/img/feature-icons/ellipses.png";

import { useDispatch } from 'react-redux'
import { addToCart, loadCartTotalItems, cartTotal } from '../../store/actions/products'

const tag = (t) => {
  switch (t) {
    case "new":
      return (
        <div className="p-tag p-tag-new d-flex align-items-center justify-content-center">
          <p>NEW</p>
        </div>
      );
    case "hot":
      return (
        <div className="p-tag p-tag-hot d-flex align-items-center justify-content-center">
          <p>HOT</p>
        </div>
      );
    case "sale":
      return (
        <div className="p-tag p-tag-sale d-flex align-items-center justify-content-center">
          <p>-20%</p>
        </div>
      );
    case "brand":
      return (
        <div className="product-brand">
          <img className="product-brand-img" src={Boxim} alt="Boxim" />
        </div>
      );
    default:
      return null;
  }
};


export default function Product(props) {

  let history = useHistory();
  const dispatch = useDispatch()

  const handleClick = (e) => {
    if(!e.target.classList.contains('quick-view') && !e.target.classList.contains('add-to-cart')){
      history.push(`/product/${props.product._id}`)
    }
  }

  const handleAddToCart = () => {
    dispatch(addToCart({product: props.product, qnt: 1}))
    dispatch(loadCartTotalItems())
    dispatch(cartTotal())
  }



  if (props.product !== undefined) {
    return (
      <div className={props.className}>
        {tag(props.tag)}
        <img className="product-image" src={props.product.image} alt="" />
        <div className="product-footer product-font-size">
          <p>{props.product.name}</p>
        </div>

        <div className="product-overlay" onClick={handleClick}>
          <div className="product-overlay-info">
            <p className="mb-1">{props.product.name}</p>
            <span className="c-item-tag">{props.product.data.tags[0]}</span>
            <p className="old-price">${props.product.price}.00</p>
            <p className="new-price">
              ${props.product.price - props.product.discount}.00
            </p>
          </div>
          <div className="r-stars product-overlay-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          
          <div className="product-overlay-controller d-flex align-items-center flex-column justify-content-between">
            <a
              data-tip
              data-for="color"
              className="fas fa-circle link-color"
              data-place="left"
              href="#"
            > </a>
            <ReactTooltip
              id="color"
              aria-haspopup="true"
              className="light-background"
              effect="solid"
            >
              <img src={Ellipses} alt="" />
            </ReactTooltip>

            <a
              data-tip="Add"
              data-for="add"
              className="far fa-heart link-color"
              data-place="left"
              href="#"
            > </a>

            <ReactTooltip
              id="add"
              className="fix-controll purple-background"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
              effect="solid"
            />

            <a
              data-tip="Compare"
              data-for="compare"
              className="fas fa-arrows-alt-h link-color"
              data-place="left"
              href="#"
            > </a>

            <ReactTooltip
              id="compare"
              className="fix-controll green-background"
              data-toggle="tooltip"
              data-placement="left"
              title="Compare"
              effect="solid"
            />

            <a
              onClick={() => props.handleOpenModal(props.product)}
              data-tip="Quick view"
              data-for="read"
              event="focus"
              data-html={true}
              className="fas fa-search search-button link-color quick-view"
              data-place="left"
            > </a>

            <ReactTooltip
              id="read"
              data-toggle="tooltip"
              data-placement="left"
              title="Quick view"
              className="fix-controll orange-background"
              effect="solid"
            ></ReactTooltip>

            <a
              data-tip="Add to cart"
              // onClick={() => props.handleOpenModal(props.product)}
              // onClick={() => add(props.product)}
              onClick={() => handleAddToCart()}
              className="fas fa-cart-plus link-color add-to-cart"
              data-place="left"
            > </a>

            <ReactTooltip
              className="fix-controll custom-theme"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to cart"
              effect="solid"
            ></ReactTooltip>
          </div>
        </div>
        
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        {tag(props.tag)}

        <img className="product-image" src={Product1} alt="" />
        <div className="product-footer">
          <p>Men's denim shirts full</p>
        </div>

        <div className="product-overlay">
          <div className="product-overlay-info">
            <p className="mb-1">New look men's sneakers</p>
            <span className="c-item-tag">Travel</span>
            <p className="old-price">$200.00</p>
            <p className="new-price">$180.00</p>
          </div>
          <div className="r-stars product-overlay-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
          </div>
          <div className="product-overlay-controller d-flex align-items-center flex-column justify-content-between">
            <a
              data-tip
              data-for="color"
              className="fas fa-circle link-color"
              data-place="left"
              href="#"
            > </a>
            <ReactTooltip
              id="color"
              aria-haspopup="true"
              className="light-background"
              effect="solid"
            >
              <img src={Ellipses} alt="" />
            </ReactTooltip>

            <a
              data-tip="Add"
              data-for="add"
              className="far fa-heart link-color"
              data-place="left"
              href="#"
            ></a>

            <ReactTooltip
              id="add"
              className="fix-controll purple-background"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to wishlist"
              effect="solid"
            />

            <a
              data-tip="Compare"
              data-for="compare"
              className="fas fa-arrows-alt-h link-color"
              data-place="left"
              href="#"
            ></a>

            <ReactTooltip
              id="compare"
              className="fix-controll green-background"
              data-toggle="tooltip"
              data-placement="left"
              title="Compare"
              effect="solid"
            />

            <a
              data-tip="Read more"
              data-for="read"
              className="fas fa-search search-button link-color"
              data-place="left"
              href="#"
            ></a>

            <ReactTooltip
              id="read"
              to="/products"
              data-toggle="tooltip"
              data-placement="left"
              title="Quick view"
              className="fix-controll orange-background"
              effect="solid"
            />

            <a
              data-tip="Add to cart"
              className="fas fa-cart-plus link-color"
              data-place="left"
              href="#"
              onClick={() => props.handleOpenModal(props.product)}
            ></a>

            <ReactTooltip
              className="fix-controll custom-theme"
              data-toggle="tooltip"
              data-placement="left"
              title="Add to cart"
              effect="solid"
            />
          </div>
        </div>
      </div>
    );
  }
}
