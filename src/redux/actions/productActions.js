import FakeStoreApi from "../../apis/FakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await FakeStoreApi.get("/products");
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await FakeStoreApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

//SELECT ONE PRODUCT

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
