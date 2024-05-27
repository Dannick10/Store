import ProductsActionTypes from "./action-types"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const productsReduce = (state = initialState, action) => {
    switch (action.type){
        case ProductsActionTypes.ADD_PRODUCT:
            return{...initialState, products: [...initialState.products, action.payload],} 

            default:
                return state
    }   
}

export default productsReduce