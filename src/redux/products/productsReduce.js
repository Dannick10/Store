import ProductsActionTypes from "./action-types"

const initialState = {
    products: [],
    productsTotalPrice: 0
}

const productsReduce = (state = initialState, action) => {
    switch (action.type){
        case ProductsActionTypes.ADD_PRODUCT:
            
            const productsisAlready = state.products.some(products => products.id === action.payload.id)

            if (productsisAlready) {
                return {
                    ...state,
                    products: state.products.map((product) => 
                    product.id === action.payload.id 
                    ? {...product,quantity: product.quantity + 1}:
                product)
                }
            }

            return {
                ...state,
                products: [...state.products, { ...action.payload, quantity: 1}]
            }

            case ProductsActionTypes.REMOVE_PRODUCT:
                return{
                    ...state,
                    products: state.products.filter(products => products.id !== action.payload)
                }
            
            case ProductsActionTypes.INCREASE_PRODUCT:
                return{
                    ...state,
                    products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity +1} : product)
                }
            
            case ProductsActionTypes.DECREASE_PRODUCT:
                return{
                    ...state,
                    products: state.products.map(product => product.id === action.payload ? {...product, quantity: product.quantity - 1} : product ).filter((product) => product.quantity > 0)
                }
             

            default:
                return state
    }   
}

export default productsReduce