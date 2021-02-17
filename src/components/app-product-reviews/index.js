import React from "react";
import "./index.css";
// import ClientThumbImage from "../../assets/img/review-img/review-thumb.png";
import Client1 from '../../assets/img/review-img/review-1.jpg'
import Client2 from '../../assets/img/review-img/review-2.jpg'

export default function Index() {
  return (
    <div className="product-desc review-wrapper">
      <div className="container">
        <div className="product-desc-tabs d-flex ">
          <span className="product-desc-tab">Description</span>
          <span className="product-desc-tab d-none d-md-block">
            Additional Information
          </span>
          <span className="product-desc-tab active">Reviews (2)</span>
          <span className="product-desc-tab">About Brand</span>
        </div>
        <hr className="product-desc-hr" />

        <div className="row ">
          <div className="col-lg-6">
            <p className="text-size-18 text-second-color  mobile-review-header">
              <span className="text-theme-color ">2 reviews for</span> Gents
              Blue Lightweight Trainers
            </p>

            <div className="product-desc-review d-flex  mobile-review-img">
              <div className=" ">
                <img
                  className="mobile-img-size"
                  src={Client1}
                  alt=""
                />
              </div>
              <div>
                <div className="d-flex justify-content-between flex-column flex-md-row ">
                  <p className="mb-2">
                    <span className="weight-bold text-theme-color">
                      John Doe
                    </span>
                    <span className="text-size-14 text-grey-color">
                      {" "}
                      - 24 July, 2020
                    </span>
                  </p>
                  <div className="text-theme-color">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <p className="text-second-color ">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut
                  aliquam erat volutpat. Ut wisi enim.
                </p>
              </div>
            </div>
            <hr className="product-desc-review-break" />

            <div className="product-desc-review d-flex        mobile-review-img">
              <div className=" ">
                <img 
                  className="mobile-img-size" 
                  src={Client2} 
                  alt="" 
                />
              </div>
              <div>
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <p className="mb-2">
                    <span className="weight-bold text-theme-color">
                      Alice Cary
                    </span>
                    <span className="text-size-14 text-grey-color">
                      {" "}
                      - 16 June, 2020
                    </span>
                  </p>
                  <div className="text-theme-color ">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </div>
                <p className="text-second-color">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="add-review-form">
              <form>
                <h3 className="text-size-24 text-theme-color">Add a review</h3>
                <p className="text-size-14 text-dark-grey-color mt-3">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <p className="mt-3 mb-3">
                  Your rating<span className="text-theme-color">*</span>:
                  <span className="ml-4 text-grey-color">
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                </p>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">
                    Your review<span className="text-theme-color">*</span>
                  </label>
                  <textarea
                    className="form-control custom-r-input"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="text-size-14 font-montserrat"
                  >
                    Name<span className="text-theme-color">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control custom-r-input"
                    id="exampleFormControlInput1"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="text-size-14 font-montserrat"
                  >
                    Email<span className="text-theme-color">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control custom-r-input"
                    id="exampleFormControlInput2"
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button className="custom-theme-btn sub-btn">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
