import { actionTypes } from "../constants/actionTypes";
export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (products) => {
    return {
        type: actionTypes.SELECTED_PRODUCT,
        payload: products
    };
};