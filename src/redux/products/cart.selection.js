import rootReducer from "../root-reducer";

export const selectProductsCount = (rootReducer) => {
    return rootReducer.productsReduce.products.reduce((acc,curr) => acc + curr.quantity,
     0
    )
}

export const SelectProductsTotalPrice = (rootReducer) => {
    return rootReducer.productsReduce.products.reduce((acc, curr) => acc + curr.price * curr.quantity,
    0 
) 
}