import ProductsActionTypes from "./action-types"

export const addProductstoCart = (payload) => ({
    type: ProductsActionTypes.ADD_PRODUCT,
    payload,
})