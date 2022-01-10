import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import "../App.css";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
