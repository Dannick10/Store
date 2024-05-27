import ProductsActionTypes from "./action-types"

export const addProductstoCart = (payload) => ({
    type: ProductsActionTypes.ADD_PRODUCT,
    payload,
})

export const removeProductstoCart = (payload) => ({
    type: ProductsActionTypes.REMOVE_PRODUCT,
    payload
})

export const increaseProductstoCart = (payload) => ({
    type: ProductsActionTypes.INCREASE_PRODUCT,
    payload
})

export const decreaseProductstoCart = (payload) => ({
    type: ProductsActionTypes.DECREASE_PRODUCT,
    payload
})
