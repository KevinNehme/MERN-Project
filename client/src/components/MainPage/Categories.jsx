import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronics",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home Accessories",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Big Offers",
    },
  ];

  return (
    <>
      <div className="category">
        <div className="catMain">
        <div className="cat">
          <span class="fa-solid fa-border-all"></span>
          <h2>Categories</h2>
        </div>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
