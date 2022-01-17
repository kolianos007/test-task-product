import { IProduct } from "../../types/types";
import { ProductsActionsType } from "../actions/productsActions";

const initialState = {
    products: [] as IProduct[],
    loading: true,
    error: null as any
}

type InitialState = typeof initialState

const products = (state = initialState, action: ProductsActionsType): InitialState => {
    switch(action.type) {
        case "FETCH_PRODUCTS":
            return {
                ...state,
                loading: true
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case "FETCH_PRODUCTS_ERROR":
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return state
    }
}

export default products