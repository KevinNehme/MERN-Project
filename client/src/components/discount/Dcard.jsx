import { React, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ddata from "./Ddata";
import "../newarrivals/style.css";



const Dcard = (productItems, addToCart) => {
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa fa-long-arrow-alt-right"></i>
        </button>
      </div>
    );
  };
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa fa-long-arrow-alt-left"></i>
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };

  let dataSearch = Ddata.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div className="upperSearch">
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search for Discounts"
            value={filter}
            onChange={searchText.bind(this)}
          />
        </div>
      </div>
      <Slider {...settings}>
        {dataSearch.map((value, index) => {
          return (
            <>
              <div className="box product" key={index}>
                <div className="img">
                  <img src={value.cover} alt="" width="100%" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                  </div>
                </div>
                <div className="product-details">
                <h3>{Ddata.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{value.name}</h4>
                  <button onClick={() => addToCart(Ddata)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
                <span>{value.price}</span>
              </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Dcard;
