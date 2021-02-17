import React, { useState, forwardRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/app-navigation";
import "./App.css";
import "./assets/css/custom.css";

import Home from "../src/views/Home/index";
import Products from "../src/views/Products/index";
import Shop from "../src/views/Shop";
import CheckoutCart from "../src/components/shoppingcart/shopping-cart-step-2";
import AppFooterNew from "../src/components/app-footer-new/index";
import Account from "../src/views/Account";
import ShoppingCartView from "../src/components/shoppingcart/shopping-cart-step-1";
import NotFound from "./views/NotFound/index";
import AppProductModal from "./components/app-product-modal";
import Contact from "./components/app-contact-us";
import BackToTopArrow from "./components/app-back-to-top/index";
import Admin from "./components/app-admin/index";
import OrderComplete from "./components/shoppingcart/shopping-cart-step-3/";

import { Modal } from "@material-ui/core";
import { useSelector } from "react-redux";

const AppModalWithRef = forwardRef((props, ref) => {
  return <AppProductModal {...props} innerRef={ref} />;
});



function App() {

  const routeAdmin = useSelector(state => state.user.user.role)
  console.log(routeAdmin);

  const [open, setOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});

  const handleOpenModal = (product) => {
    if (product !== undefined) setModalProduct(product);
    else
      setModalProduct({
        _id: 1,
        data: {
          color: "black",
          tags: ["Test"],
          brand: "bexim",
          category: "shoes",
        },
        name: "Namn",
        short: "",
        desc: "",
        price: 120,
        discount: 20,
        image:
          "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg",
      });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <BrowserRouter>
      <Modal
        open={open}
        onClose={handleClose}
        className="d-flex align-items-center justify-content-center popup-bg-color"
      >
        <AppModalWithRef product={modalProduct} />
      </Modal>

      <Navigation />

      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home handleOpenModal={handleOpenModal} />}
        />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/product/:id" component={Products} />
        <Route exact path="/account" component={Account} />
        <Route
          exact
          path="/shop"
          component={() => <Shop handleOpenModal={handleOpenModal} />}
        />
        <Route
          exact
          path="/shoppingcart"
          component={() => (
            <ShoppingCartView handleOpenModal={handleOpenModal} />
          )}
        />
        <Route exact path="/checkout" component={CheckoutCart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/complete" component={OrderComplete} />
        {/* <Route exact path="/thanksforregistring" component={ThanksForRegistring} /> */}

        
      {
        routeAdmin === 'admin'
          ? <Route exact path="/admin" component={Admin} />
          : <Route exact path="*" component={NotFound} />
      }

      
 
        <Route exact path="*" component={NotFound} />
      </Switch>

      <AppFooterNew />
      <BackToTopArrow />
    </BrowserRouter>
  );
}

export default App;
