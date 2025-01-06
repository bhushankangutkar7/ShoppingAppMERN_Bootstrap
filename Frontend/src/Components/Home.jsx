import React, { useState } from "react";

const Home = () => {
  const [image, setImage] = useState([
    { id: "img1", url: "../src/images/homeWinter", alt: "homeWinter" },
    { id: "img2", url: "../src/images/mobile", alt: "mobile" },
    { id: "img3", url: "../src/images/sonyTV", alt: "sonyTV" },
  ]);

  console.log();

  return (
    <>
      {/* <h2>Home</h2> */}

      {/* <div
        className={image.map((imgObj) => {
          `${imgObj.id}`;
        })}
      >
        <img
          className="w-100"
          src={image.map((imgObj) => {
            `${imgObj.url}`;
          })}
          alt=""
        />
      </div> */}

      <div className="slideShowContainer w-100">
        <div className="slide fadeEffect">
          <img className="w-100" src="../src/images/mobile.jpg" alt="mobile" />
        </div>
        <div className="slide fadeEffect">
          <img
            className="w-100"
            src="../src/images/homeWinter.jpg"
            alt="mobile"
          />
        </div>
        <div className="slide fadeEffect">
          <img className="w-100" src="../src/images/sonyTV.jpg" alt="mobile" />
        </div>

        <span class="material-symbols-outlined arrowLeft">
          keyboard_double_arrow_left
        </span>
        <span class="material-symbols-outlined arrowRight">
          keyboard_double_arrow_right
        </span>
      </div>
    </>
  );
};

export default Home;
