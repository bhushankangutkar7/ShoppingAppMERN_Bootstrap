import React, { useContext, useState } from "react";
import ExpandContext from "../Context/ExpandContext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const images = [
    { id: "img1", url: "../src/Images/SlideShow/mobile.jpg", alt: "mobile" },
    {
      id: "img2",
      url: "../src/Images/SlideShow/homeWinter.jpg",
      alt: "homeWinter",
    },
    {
      id: "img3",
      url: "../src/Images/SlideShow/homeDecor.jpg",
      alt: "homeDecor",
    },
    {
      id: "img4",
      url: "../src/Images/SlideShow/mobileDeals.jpg",
      alt: "mobileDeals",
    },
    {
      id: "img5",
      url: "../src/Images/SlideShow/electronics.jpg",
      alt: "electronics",
    },
    {
      id: "img6",
      url: "../src/Images/SlideShow/dailyNeeds.jpg",
      alt: "dailyNeeds",
    },
    { id: "img7", url: "../src/Images/SlideShow/books.jpg", alt: "books" },
    {
      id: "img8",
      url: "../src/Images/SlideShow/computerAccessories.jpg",
      alt: "computerAccessories",
    },
    { id: "img9", url: "../src/Images/SlideShow/sonyTV.jpg", alt: "sonyTV" },
  ];

  const [current, setCurrent] = useState(0);

  const { isExpanded } = useContext(ExpandContext);

  // const reset = () => {
  //   setCurrent(0);
  // };

  const automaticSlideShow = () => {
    setTimeout(() => {
      nextBtn();
    }, 2500);
  };

  const prevBtn = () => {
    if (current === 0) {
      setCurrent(images.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextBtn = () => {
    if (current === images.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  if (isExpanded) {
    automaticSlideShow();
  }

  return (
    <>
      <div className="homeContainer">
        <div className="slideShowContainer">
          <div className="slideContainer" id={images[current].id}>
            <img
              className="slideImage w-100 d-block"
              src={images[current].url}
              alt=""
            />
          </div>
          <div>
            <span
              className={
                isExpanded
                  ? "material-symbols-outlined arrowLeft d-none"
                  : "material-symbols-outlined arrowLeft"
              }
              onClick={() => {
                prevBtn();
              }}
            >
              arrow_back_ios
            </span>
            <span
              className={
                isExpanded
                  ? "material-symbols-outlined arrow arrowRight d-none"
                  : "material-symbols-outlined arrow arrowRight"
              }
              onClick={() => {
                nextBtn();
              }}
            >
              arrow_forward_ios
            </span>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-center bg-light">
          <div
            className="card m-2 mt-4 pb-1"
            style={{ width: "24%", height: "30em" }}
          >
            <h4 className="p-1 m-1">Automotive Essentials</h4>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-1 p-1">
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_1.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_2.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_3.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_4.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
            </div>
            <NavLink className="ms-3">
              <p>Explore more</p>
            </NavLink>
          </div>
          <div
            className="card m-2 mt-4 pb-1"
            style={{ width: "24%", height: "30em" }}
          >
            <h4 className="p-1 m-1">Automotive Essentials</h4>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-1 p-1">
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_1.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_2.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_3.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_4.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
            </div>
            <NavLink className="ms-3">
              <p>Explore more</p>
            </NavLink>
          </div>
          <div
            className="card m-2 mt-4 pb-1"
            style={{ width: "24%", height: "30em" }}
          >
            <h4 className="p-1 m-1">Automotive Essentials</h4>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-1 p-1">
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_1.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_2.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_3.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_4.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
            </div>
            <NavLink className="ms-3">
              <p>Explore more</p>
            </NavLink>
          </div>
          <div
            className="card m-2 mt-4 pb-1"
            style={{ width: "24%", height: "30em" }}
          >
            <h4 className="p-1 m-1">Automotive Essentials</h4>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-1 p-1">
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_1.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_2.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_3.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
              <img
                className="m-2"
                src="../src/Images/ProductImages/Automotive_4.jpg"
                alt=""
                style={{ width: "42.5%", height: "10em" }}
              />
            </div>
            <NavLink className="ms-3">
              <p>Explore more</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
