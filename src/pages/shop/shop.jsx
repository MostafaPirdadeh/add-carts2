import React from "react";
import { Fragment } from "react";
import { PRODUCTS } from "../../data/product";
import { Product } from "./product";
const Shop = () => {
  return (
    <Fragment>
      <div>Shop</div>
      <div className="row">
        {PRODUCTS.map((productData)=>{
          return  <Product key={productData.id} data={productData}/>
        })}
        </div>
    </Fragment>
  );
};
export default Shop;
